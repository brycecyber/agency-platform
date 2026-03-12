import { NextRequest, NextResponse } from 'next/server'
import { generateWebsite } from '@/lib/generator'
import { getDb } from '@/lib/db'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: NextRequest) {
  try {
    const { business_id } = await req.json()
    if (!business_id) return NextResponse.json({ error: 'business_id required' }, { status: 400 })

    const db = getDb()

    const business = db.prepare('SELECT * FROM businesses WHERE id = ?').get(business_id) as {
      id: string; name: string; category: string; city: string
    } | undefined
    if (!business) return NextResponse.json({ error: 'Business not found' }, { status: 404 })

    const scrape = db.prepare('SELECT * FROM scrape_results WHERE business_id = ? ORDER BY scraped_at DESC LIMIT 1').get(business_id) as {
      id: string
      title: string
      meta_description: string
      hero_text: string
      about_text: string
      services: string
      contact_info: string
      colors: string
      fonts: string
      logo_url: string
      images: string
      social_links: string
    } | undefined

    if (!scrape) return NextResponse.json({ error: 'Business must be scraped first' }, { status: 400 })

    // Parse scraped JSON fields
    const services = JSON.parse(scrape.services || '[]')
    const contactInfo = JSON.parse(scrape.contact_info || '{}')
    const imageUrls = JSON.parse(scrape.images || '[]')
    const socialLinks = JSON.parse(scrape.social_links || '[]')

    const scrapedContent = {
      url: '',
      title: scrape.title || '',
      metaDescription: scrape.meta_description || '',
      h1: scrape.hero_text || '',
      heroText: scrape.hero_text || '',
      aboutText: scrape.about_text || '',
      services,
      phone: contactInfo.phone || '',
      email: contactInfo.email || '',
      address: contactInfo.address || '',
      hours: contactInfo.hours || '',
      teamMembers: [],
      testimonials: [],
      socialLinks,
      logoUrl: scrape.logo_url || '',
      imageUrls,
      primaryColor: '',
      secondaryColor: '',
      fonts: [],
      rawText: '',
      issues: [],
      score: 0,
    }

    db.prepare("UPDATE businesses SET status = 'generating', updated_at = datetime('now') WHERE id = ?").run(business_id)

    const result = await generateWebsite(business.name, business.category, business.city, scrapedContent)

    const siteId = uuidv4()
    const version = ((db.prepare('SELECT MAX(version) as v FROM generated_sites WHERE business_id = ?').get(business_id) as { v: number | null })?.v ?? 0) + 1

    db.prepare(`
      INSERT INTO generated_sites (id, business_id, scrape_id, html, version)
      VALUES (@id, @business_id, @scrape_id, @html, @version)
    `).run({ id: siteId, business_id, scrape_id: scrape.id, html: result.html, version })

    db.prepare("UPDATE businesses SET status = 'generated', updated_at = datetime('now') WHERE id = ?").run(business_id)

    return NextResponse.json({
      site_id: siteId,
      version,
      tokens: { input: result.inputTokens, output: result.outputTokens },
      preview_url: `/preview/${siteId}`,
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
