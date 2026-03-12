import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

const DB_PATH = path.join(process.cwd(), 'data', 'agency.db')

// Ensure data directory exists
if (!fs.existsSync(path.dirname(DB_PATH))) {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true })
}

let _db: Database.Database | null = null

export function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH)
    _db.pragma('journal_mode = WAL')
    _db.pragma('foreign_keys = ON')
    initSchema(_db)
  }
  return _db
}

function initSchema(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS businesses (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      name        TEXT NOT NULL,
      niche       TEXT NOT NULL,
      city        TEXT NOT NULL,
      state       TEXT,
      phone       TEXT,
      address     TEXT,
      website_url TEXT,
      maps_place_id TEXT UNIQUE,
      rating      REAL,
      review_count INTEGER,
      status      TEXT NOT NULL DEFAULT 'discovered',
      -- status: discovered | scraping | scraped | generating | generated | deploying | deployed | error
      error_message TEXT,
      created_at  TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at  TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS scraped_data (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      business_id  INTEGER NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
      title        TEXT,
      description  TEXT,
      services     TEXT,    -- JSON array of service names
      about_text   TEXT,
      team_info    TEXT,    -- JSON array of team members
      testimonials TEXT,    -- JSON array of testimonials
      phone        TEXT,
      email        TEXT,
      address      TEXT,
      hours        TEXT,    -- JSON object of hours
      social_links TEXT,    -- JSON object of social links
      logo_url     TEXT,
      image_urls   TEXT,    -- JSON array of image URLs
      primary_color TEXT,
      secondary_color TEXT,
      fonts        TEXT,    -- JSON array of detected fonts
      raw_html     TEXT,
      scraped_at   TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS generated_sites (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      business_id  INTEGER NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
      html_content TEXT NOT NULL,
      generation_prompt TEXT,
      model_used   TEXT,
      tokens_used  INTEGER,
      version      INTEGER NOT NULL DEFAULT 1,
      generated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS deployments (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      business_id   INTEGER NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
      site_id       INTEGER NOT NULL REFERENCES generated_sites(id) ON DELETE CASCADE,
      vercel_deployment_id TEXT,
      vercel_project_id    TEXT,
      preview_url   TEXT,
      deployed_at   TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TRIGGER IF NOT EXISTS update_business_timestamp
    AFTER UPDATE ON businesses
    BEGIN
      UPDATE businesses SET updated_at = datetime('now') WHERE id = NEW.id;
    END;
  `)
}

// ── Typed helpers ──────────────────────────────────────────────────────────

export interface Business {
  id: number
  name: string
  niche: string
  city: string
  state: string | null
  phone: string | null
  address: string | null
  website_url: string | null
  maps_place_id: string | null
  rating: number | null
  review_count: number | null
  status: string
  error_message: string | null
  created_at: string
  updated_at: string
  // joined
  preview_url?: string | null
}

export interface ScrapedData {
  id: number
  business_id: number
  title: string | null
  description: string | null
  services: string | null
  about_text: string | null
  team_info: string | null
  testimonials: string | null
  phone: string | null
  email: string | null
  address: string | null
  hours: string | null
  social_links: string | null
  logo_url: string | null
  image_urls: string | null
  primary_color: string | null
  secondary_color: string | null
  fonts: string | null
  raw_html: string | null
  scraped_at: string
}

export function getAllBusinesses(): Business[] {
  const db = getDb()
  return db.prepare(`
    SELECT b.*, d.preview_url
    FROM businesses b
    LEFT JOIN deployments d ON d.business_id = b.id
    ORDER BY b.created_at DESC
  `).all() as Business[]
}

export function getBusinessById(id: number): Business | null {
  const db = getDb()
  return db.prepare(`
    SELECT b.*, d.preview_url
    FROM businesses b
    LEFT JOIN deployments d ON d.business_id = b.id
    WHERE b.id = ?
  `).get(id) as Business | null
}

export function upsertBusiness(data: Partial<Business> & { name: string; niche: string; city: string }): number {
  const db = getDb()
  if (data.maps_place_id) {
    const existing = db.prepare('SELECT id FROM businesses WHERE maps_place_id = ?').get(data.maps_place_id) as { id: number } | undefined
    if (existing) return existing.id
  }
  const result = db.prepare(`
    INSERT INTO businesses (name, niche, city, state, phone, address, website_url, maps_place_id, rating, review_count)
    VALUES (@name, @niche, @city, @state, @phone, @address, @website_url, @maps_place_id, @rating, @review_count)
  `).run(data)
  return result.lastInsertRowid as number
}

export function updateBusinessStatus(id: number, status: string, error?: string) {
  getDb().prepare('UPDATE businesses SET status = ?, error_message = ? WHERE id = ?').run(status, error ?? null, id)
}

export function saveScrapedData(businessId: number, data: Partial<ScrapedData>) {
  const db = getDb()
  db.prepare('DELETE FROM scraped_data WHERE business_id = ?').run(businessId)
  db.prepare(`
    INSERT INTO scraped_data
    (business_id, title, description, services, about_text, team_info, testimonials,
     phone, email, address, hours, social_links, logo_url, image_urls,
     primary_color, secondary_color, fonts, raw_html)
    VALUES (@business_id, @title, @description, @services, @about_text, @team_info, @testimonials,
     @phone, @email, @address, @hours, @social_links, @logo_url, @image_urls,
     @primary_color, @secondary_color, @fonts, @raw_html)
  `).run({ business_id: businessId, ...data })
}

export function getScrapedData(businessId: number): ScrapedData | null {
  return getDb().prepare('SELECT * FROM scraped_data WHERE business_id = ?').get(businessId) as ScrapedData | null
}

export function saveGeneratedSite(businessId: number, html: string, prompt: string, model: string, tokens: number): number {
  const db = getDb()
  const version = ((db.prepare('SELECT MAX(version) as v FROM generated_sites WHERE business_id = ?').get(businessId) as { v: number | null })?.v ?? 0) + 1
  const result = db.prepare(`
    INSERT INTO generated_sites (business_id, html_content, generation_prompt, model_used, tokens_used, version)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(businessId, html, prompt, model, tokens, version)
  return result.lastInsertRowid as number
}

export function getLatestGeneratedSite(businessId: number): { id: number; html_content: string } | null {
  return getDb().prepare(
    'SELECT id, html_content FROM generated_sites WHERE business_id = ? ORDER BY version DESC LIMIT 1'
  ).get(businessId) as { id: number; html_content: string } | null
}

export function saveDeployment(businessId: number, siteId: number, vercelDeploymentId: string, vercelProjectId: string, previewUrl: string) {
  getDb().prepare(`
    INSERT INTO deployments (business_id, site_id, vercel_deployment_id, vercel_project_id, preview_url)
    VALUES (?, ?, ?, ?, ?)
  `).run(businessId, siteId, vercelDeploymentId, vercelProjectId, previewUrl)
}
