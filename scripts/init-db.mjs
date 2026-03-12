import Database from 'better-sqlite3'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DB_PATH = join(__dirname, '..', 'data', 'agency.db')

mkdirSync(join(__dirname, '..', 'data'), { recursive: true })

const db = new Database(DB_PATH)

db.exec(`
  CREATE TABLE IF NOT EXISTS businesses (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    address TEXT,
    city TEXT NOT NULL,
    state TEXT,
    phone TEXT,
    email TEXT,
    website_url TEXT,
    google_place_id TEXT,
    rating REAL,
    review_count INTEGER,
    status TEXT NOT NULL DEFAULT 'discovered',
    score INTEGER DEFAULT 0,
    notes TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS scrape_results (
    id TEXT PRIMARY KEY,
    business_id TEXT NOT NULL REFERENCES businesses(id),
    scraped_at TEXT NOT NULL DEFAULT (datetime('now')),
    title TEXT,
    meta_description TEXT,
    hero_text TEXT,
    about_text TEXT,
    services TEXT,
    contact_info TEXT,
    colors TEXT,
    fonts TEXT,
    logo_url TEXT,
    images TEXT,
    social_links TEXT,
    raw_html TEXT,
    score INTEGER DEFAULT 0,
    issues TEXT
  );

  CREATE TABLE IF NOT EXISTS generated_sites (
    id TEXT PRIMARY KEY,
    business_id TEXT NOT NULL REFERENCES businesses(id),
    scrape_id TEXT REFERENCES scrape_results(id),
    generated_at TEXT NOT NULL DEFAULT (datetime('now')),
    html TEXT NOT NULL,
    css TEXT,
    status TEXT DEFAULT 'preview',
    deploy_url TEXT,
    vercel_project_id TEXT,
    version INTEGER DEFAULT 1
  );

  CREATE INDEX IF NOT EXISTS idx_businesses_status ON businesses(status);
  CREATE INDEX IF NOT EXISTS idx_businesses_city ON businesses(city);
  CREATE INDEX IF NOT EXISTS idx_scrape_business ON scrape_results(business_id);
  CREATE INDEX IF NOT EXISTS idx_generated_business ON generated_sites(business_id);
`)

console.log('✅ Database initialized at', DB_PATH)
db.close()
