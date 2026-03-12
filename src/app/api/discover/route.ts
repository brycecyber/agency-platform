import { NextRequest, NextResponse } from 'next/server'
import { discoverBusinesses, scoreLeadPriority } from '@/lib/discovery'
import { getDb } from '@/lib/db'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: NextRequest) {
  try {
    const { niche, city, limit = 20 } = await req.json()

    if (!niche || !city) {
      return NextResponse.json({ error: 'niche and city are required' }, { status: 400 })
    }

    const leads = await discoverBusinesses(niche, city, limit)

    // Score and sort leads
    const scoredLeads = leads
      .map(lead => ({ ...lead, priority_score: scoreLeadPriority(lead) }))
      .sort((a, b) => b.priority_score - a.priority_score)

    // Save to DB automatically
    const db = getDb()
    const saved: string[] = []
    const duplicates: string[] = []

    for (const lead of scoredLeads) {
      // Check for duplicate
      const existing = lead.place_id
        ? db.prepare('SELECT id FROM businesses WHERE google_place_id = ?').get(lead.place_id) as { id: string } | undefined
        : undefined

      if (existing) {
        duplicates.push(existing.id)
        continue
      }

      const id = uuidv4()
      db.prepare(`
        INSERT INTO businesses (id, name, category, city, state, phone, website_url, address, google_place_id, rating, review_count, score, status)
        VALUES (@id, @name, @category, @city, @state, @phone, @website_url, @address, @google_place_id, @rating, @review_count, @score, 'discovered')
      `).run({
        id,
        name: lead.name,
        category: niche,
        city: lead.city,
        state: lead.state ?? null,
        phone: lead.phone ?? null,
        website_url: lead.website ?? null,
        address: lead.address ?? null,
        google_place_id: lead.place_id ?? null,
        rating: lead.rating ?? null,
        review_count: lead.review_count ?? null,
        score: lead.priority_score,
      })
      saved.push(id)
    }

    return NextResponse.json({
      total: scoredLeads.length,
      saved: saved.length,
      duplicates: duplicates.length,
      leads: scoredLeads,
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
