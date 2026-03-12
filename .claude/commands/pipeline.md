# Full Pipeline — End to End

This is the master workflow that ties everything together.
Reference this whenever the user wants to go from city → delivered HTML.

## Complete Workflow

```
User inputs city + niche
       ↓
1. FIND  → Search for 10 businesses, score them, show table with links
       ↓
User picks one (gives name or number)
       ↓
2. VERIFY → Show website URL + Google Maps profile for user to confirm it's real
       ↓
User confirms "yes build it"
       ↓
3. SCRAPE → WebFetch the URL, extract all content
       ↓
4. GENERATE → Build complete HTML using master-design.md patterns
       ↓
5. SAVE → Write to generated-sites/[name-city].html
       ↓
6. REPORT → Tell user file location + how to preview + how to share
```

---

## Quick Commands

User can trigger any step by saying:

| User says | What to do |
|-----------|-----------|
| "find plumbers in Dallas TX" | Run find-businesses.md |
| "build that one" / "do #3" | Run generate-website.md on selected business |
| "scrape [URL]" | WebFetch URL and extract content, then generate |
| "evaluate [URL]" | Run evaluate-site.md scoring |
| "what cities should I target?" | Suggest cities (see below) |

---

## Best Cities to Target (High-Opportunity Markets)

**Large metros with tons of independent small businesses:**

| City | Best Niches | Why |
|------|------------|-----|
| Austin, TX | Plumbing, HVAC, Landscaping | Explosive growth, tons of new homeowners |
| Nashville, TN | HVAC, Roofers, Contractors | Hot market, conservative business owners (slow to modernize) |
| Charlotte, NC | Electricians, HVAC, Plumbing | Fast-growing suburbs, many small operators |
| Phoenix, AZ | Pest Control, HVAC, Pool Service | Desert climate = niche services |
| Denver, CO | Landscaping, Contractors, HVAC | Wealthy market, high LTV clients |
| Tampa, FL | Pest Control, Roofing, HVAC | Pest/storm season = urgent leads |
| Raleigh, NC | Dentists, Chiropractors, HVAC | Growing tech suburb, professional services |
| Columbus, OH | Plumbing, Auto Repair, Law Firms | Midwest = less tech-savvy operators |
| San Antonio, TX | HVAC, Roofing, Landscaping | Hot climate, lots of independent contractors |
| Jacksonville, FL | Roofing, Pest Control, HVAC | Hurricane zone = roofing opportunities |

---

## When WebFetch Fails

Some sites block scrapers or are too JavaScript-heavy to extract. Do this:

1. **Try the URL directly** with WebFetch
2. **If it fails or returns minimal content:** Try fetching their Google Business Profile page for their info
3. **If still minimal:** Use just the business name, city, niche, phone (from Google listing), and generate using niche service templates in generate-website.md
4. **Always note what was real vs generated** in the report to the user

---

## How to Pitch the Client

After generating the HTML, here's exactly what to say when reaching out:

### Cold Email Template
```
Subject: I built you a free website redesign (no strings)

Hi [First Name],

I came across [Business Name] while researching [niche] companies in [City].
I noticed your website could use some updating, so I spent a couple hours
building a free modern redesign — no obligation to do anything with it.

Here's a live preview: [Netlify URL]

If you like it and want to talk about using it, I typically charge $[PRICE]
for a complete website like this. If not, no hard feelings at all.

Worth a quick 10-minute call?

[Your name]
[Phone]
```

### Cold Call Opener
```
"Hi, this is [Name].

I'm a web designer and I was just looking at [Business Name]'s website.
I actually already built a free redesign of it — took me a couple hours —
and I just wanted to show you before I reach out to anyone else in [City].

Do you have 30 seconds so I can text you a link to preview it?"
```

### If They're on Wix/Squarespace — Use This Angle
```
"I noticed you're on [Wix/Squarespace] — you're paying $25+/month
for a site that's actually hurting your Google rankings.

I built you a custom version that loads 3x faster and will rank better.
Want to see it? It's free to look at."
```

---

## Follow-Up Sequence

Most business owners won't respond to the first message. Follow up:

| Day | Action | Message |
|-----|--------|---------|
| Day 1 | Send email + text | Initial pitch with Netlify link |
| Day 3 | Follow-up email | "Just wanted to make sure you got a chance to see it" |
| Day 7 | Final follow-up | "I'm pitching other [niche] businesses in [City] this week — still happy to hand this over to you first" |
| Day 14 | Move on | Archive and target next business |

**3 touches is the sweet spot.** More than that = desperate.

---

## Finding Owner Contact Info

Before reaching out, find who to contact:

1. **Google "[Business Name] [City] owner"** — often in news or LinkedIn
2. **LinkedIn** — search company name, look for "Owner" or "Founder"
3. **Google Maps "About" tab** — sometimes shows owner name
4. **Their website's About page** — most have team member names
5. **Facebook Business Page** — check About section
6. **BBB listing** — often shows owner/principal name

**Always address by first name** — "Hi John" converts far better than "Hi there" or "To the business owner."

---

## Pricing Suggestions

| Tier | What's Included | Price Range |
|------|----------------|-------------|
| Basic | 1-page HTML site (what we generate) | $500 - $1,000 one-time |
| Standard | 1-page site + domain setup + Netlify hosting | $1,000 - $1,500 one-time |
| Premium | Multi-page site + domain + hosting + monthly SEO | $1,500 - $3,000 one-time |
| Retainer | Monthly updates, Google Business management, ads | $200 - $500/month |

**Pro tip:** Always quote one-time first. Monthly retainers are easier to sell AFTER they see their new site working.

---

## Output Folder Structure

All generated sites save here:
```
c:/Users/bryce/OneDrive/Desktop/AI Website Builder/
├── generated-sites/
│   ├── smiths-plumbing-austin.html
│   ├── joes-hvac-nashville.html
│   └── downtown-dental-charlotte.html
└── agency-platform/          ← the dashboard app
```

---

## Tips for Maximum Success

1. **Build first, pitch later** — having the demo ready before reaching out 3x increases response rate
2. **Target 4+ star businesses with old sites** — they have happy customers and just need better marketing
3. **Use Wix/Squarespace sites as your pitch** — "stop renting your website" is a powerful frame
4. **Netlify Drop is your friend** — drag HTML to netlify.com/drop, live URL in 10 seconds, free, no account needed
5. **One niche at a time** — master plumbers before moving to dentists. Your pitch gets sharper with repetition
6. **Local knowledge = trust** — mention a nearby neighborhood or landmark to prove you're local
7. **Text > Email for tradespeople** — plumbers and HVAC techs live on their phones, not in their inbox