import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { v4 as uuidv4 } from 'uuid'

export async function GET(req: NextRequest) {
  try {
    const db = getDb()
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status')
    const city = searchParams.get('city')

    let query = `
      SELECT b.*,
        s.id as scrape_id,
        s.title as scrape_title,
        s.score as scrape_score,
        g.id as generated_id,
        g.deploy_url
      FROM businesses b
      LEFT JOIN scrape_results s ON s.business_id = b.id
      LEFT JOIN generated_sites g ON g.business_id = b.id
      WHERE 1=1
    `
    const params: string[] = []

    if (status) { query += ' AND b.status = ?'; params.push(status) }
    if (city) { query += ' AND b.city LIKE ?'; params.push(`%${city}%`) }

    query += ' ORDER BY b.created_at DESC'

    const businesses = db.prepare(query).all(...params)
    return NextResponse.json({ businesses })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, category, city, state, phone, email, website_url, address, google_place_id, rating, review_count } = body

    if (!name || !category || !city) {
      return NextResponse.json({ error: 'name, category, and city are required' }, { status: 400 })
    }

    const db = getDb()

    // Check for duplicate by place_id or name+city
    if (google_place_id) {
      const existing = db.prepare('SELECT id FROM businesses WHERE google_place_id = ?').get(google_place_id) as { id: string } | undefined
      if (existing) return NextResponse.json({ id: existing.id, duplicate: true })
    }

    const id = uuidv4()
    db.prepare(`
      INSERT INTO businesses (id, name, category, city, state, phone, email, website_url, address, google_place_id, rating, review_count, score)
      VALUES (@id, @name, @category, @city, @state, @phone, @email, @website_url, @address, @google_place_id, @rating, @review_count, @score)
    `).run({
      id, name, category, city,
      state: state ?? null,
      phone: phone ?? null,
      email: email ?? null,
      website_url: website_url ?? null,
      address: address ?? null,
      google_place_id: google_place_id ?? null,
      rating: rating ?? null,
      review_count: review_count ?? null,
      score: 0,
    })

    return NextResponse.json({ id }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status, notes, score } = await req.json()
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })

    const db = getDb()
    const updates: string[] = []
    const params: (string | number)[] = []

    if (status) { updates.push('status = ?'); params.push(status) }
    if (notes !== undefined) { updates.push('notes = ?'); params.push(notes) }
    if (score !== undefined) { updates.push('score = ?'); params.push(score) }
    updates.push('updated_at = datetime(\'now\')')
    params.push(id)

    db.prepare(`UPDATE businesses SET ${updates.join(', ')} WHERE id = ?`).run(...params)
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })

    const db = getDb()
    db.prepare('DELETE FROM businesses WHERE id = ?').run(id)
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
