import { NextRequest, NextResponse } from 'next/server'
import { scrapeWebsite } from '@/lib/scraper'
import { getDb } from '@/lib/db'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: NextRequest) {
  try {
    const { business_id } = await req.json()
    if (!business_id) return NextResponse.json({ error: 'business_id required' }, { status: 400 })

    const db = getDb()
    const business = db.prepare('SELECT * FROM businesses WHERE id = ?').get(business_id) as {
      id: string; name: string; website_url: string | null; category: string; city: string
    } | undefined

    if (!business) return NextResponse.json({ error: 'Business not found' }, { status: 404 })
    if (!business.website_url) return NextResponse.json({ error: 'Business has no website URL' }, { status: 400 })

    // Update status to scraping
    db.prepare("UPDATE businesses SET status = 'scraping', updated_at = datetime('now') WHERE id = ?").run(business_id)

    const scrape = await scrapeWebsite(business.website_url)

    const scrapeId = uuidv4()
    db.prepare(`
      INSERT OR REPLACE INTO scrape_results
        (id, business_id, title, meta_description, hero_text, about_text, services, contact_info,
         colors, fonts, logo_url, images, social_links, score, issues)
      VALUES
        (@id, @business_id, @title, @meta_description, @hero_text, @about_text, @services, @contact_info,
         @colors, @fonts, @logo_url, @images, @social_links, @score, @issues)
    `).run({
      id: scrapeId,
      business_id,
      title: scrape.title,
      meta_description: scrape.metaDescription,
      hero_text: scrape.heroText,
      about_text: scrape.aboutText,
      services: JSON.stringify(scrape.services),
      contact_info: JSON.stringify({ phone: scrape.phone, email: scrape.email, address: scrape.address, hours: scrape.hours }),
      colors: JSON.stringify({ primary: scrape.primaryColor, secondary: scrape.secondaryColor }),
      fonts: JSON.stringify(scrape.fonts),
      logo_url: scrape.logoUrl,
      images: JSON.stringify(scrape.imageUrls),
      social_links: JSON.stringify(scrape.socialLinks),
      score: scrape.score,
      issues: JSON.stringify(scrape.issues),
    })

    // Also update business phone/email if missing
    if (scrape.phone) db.prepare("UPDATE businesses SET phone = ? WHERE id = ? AND phone IS NULL").run(scrape.phone, business_id)
    if (scrape.email) db.prepare("UPDATE businesses SET email = ? WHERE id = ? AND email IS NULL").run(scrape.email, business_id)

    db.prepare("UPDATE businesses SET status = 'scraped', updated_at = datetime('now') WHERE id = ?").run(business_id)

    return NextResponse.json({ scrape_id: scrapeId, scrape })
  } catch (err) {
    // Reset status on failure
    try {
      const { business_id } = await (req as NextRequest & { _body?: { business_id?: string } })._body ?? {}
      if (business_id) {
        const db = getDb()
        db.prepare("UPDATE businesses SET status = 'error', updated_at = datetime('now') WHERE id = ?").run(business_id)
      }
    } catch {}
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
