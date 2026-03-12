# Find Local Businesses — Skill

When the user says "find businesses in [city]" or "search [niche] in [city]", follow this exact process.

## Step 1 — Understand the Request

Extract:
- **City** (e.g. "Austin, Texas" or "Austin TX")
- **Niche** — if not specified, default to searching ALL high-value niches below
- **Limit** — default to top 10 most desperate leads

---

## High-Value Niches (Ranked by Website Quality Gap)

These businesses historically have the worst websites and highest ROI for a redesign:

| Rank | Niche | Why They're Great Targets |
|------|-------|--------------------------|
| 1 | Plumbers | 60%+ still on Wix/GoDaddy or sites from 2014. Emergency leads = huge ROI |
| 2 | HVAC / Heating & Cooling | Seasonal urgency drives high-value jobs. Terrible web presence common |
| 3 | Electricians | License-required = fewer competitors. Old sites common |
| 4 | Roofers | High ticket ($8k-$30k jobs). Any lead = massive ROI |
| 5 | Dentists | High LTV per patient. Often on outdated templates |
| 6 | Chiropractors | Need new patients constantly. Small practices = bad sites |
| 7 | Landscapers / Lawn Care | Very low web sophistication. Easy to impress |
| 8 | Pest Control | Recurring revenue model. Operators not tech-savvy |
| 9 | Auto Repair Shops | Independent shops vs chains. Old sites everywhere |
| 10 | Law Firms (PI, Family, Criminal) | High fee per case. Many solo/small firms with bad sites |
| 11 | Accountants / CPAs | Tax season urgency. Template sites common |
| 12 | General Contractors | High-ticket remodels. Portfolio sites often outdated |
| 13 | Veterinarians | High LTV. Small practices often neglect web |
| 14 | Pressure Washing / Window Cleaning | Fast-growing niche. Operators are not designers |
| 15 | Insurance Agents | Captive agents (State Farm, Allstate) = blank template sites |

---

## Step 2 — Search for Businesses

Use WebSearch with these queries to find real local businesses:

### Primary Search Queries (use these first)
```
"[niche] [city] [state]"
"best [niche] in [city]"
"[niche] near [city] [state]"
"[niche] [city]" -yelp -angi -homeadvisor -thumbtack -houzz
```

### Google Maps Specific
```
"[niche] [city]" site:maps.google.com
"[niche] in [city]" maps
```

### Find Weak Sites Specifically
```
"[niche] [city]" inurl:wix OR inurl:weebly OR inurl:godaddy
"[niche] [city]" site:wixsite.com
"[niche] [city]" site:squarespace.com
```

For each result, find:
- Business name
- Website URL
- Google Maps / Google Business Profile URL
- Phone number
- Star rating and review count

---

## Step 3 — Identify Site Builder (Quick Platform Check)

When you have their URL, scan for these signals to detect platform:

| Platform | How to Detect (View Source → Ctrl+F) | Pitch Angle |
|----------|--------------------------------------|-------------|
| **Wix** | `<meta name="wix-site-id">` OR `.wixsite.com` in URL | "Stop paying Wix monthly — own your site" |
| **Squarespace** | `<meta name="generator" content="Squarespace">` | "Squarespace kills your SEO — here's proof" |
| **GoDaddy Builder** | `<meta name="generator" content="Starfield Technologies; Go Daddy Website Builder">` | "GoDaddy builder ranks poorly on Google" |
| **Weebly** | `weeblysite.com` in domain OR `weebly.com` scripts | "Weebly sites are getting penalized in 2025" |
| **WordPress (old theme)** | `wp-content/` in source + old copyright year | "Your theme is hurting your conversions" |
| **Custom / Unknown** | None of the above | Standard pitch |

**Fastest check:** Right-click the page → View Page Source → Ctrl+F → type `generator`

**Wix/Squarespace/GoDaddy = automatic +10 points on opportunity score** (they're paying monthly for a worse product)

---

## Step 4 — Score Each Business (Opportunity Score)

Score how desperately they need a new website. Higher = better prospect.

| Signal | Points |
|--------|--------|
| Website loads slowly / feels old | +20 |
| No mobile responsiveness | +20 |
| No clear phone number above the fold | +15 |
| Copyright year in footer is 3+ years old | +15 |
| No testimonials / reviews section | +15 |
| No SSL (http:// not https://) | +15 |
| Site is on Wix, Squarespace, or GoDaddy builder | +10 |
| No services section | +10 |
| 50+ Google reviews (established, worth the investment) | +10 |
| Rating 4.0+ stars (good service, just bad web presence) | +10 |
| Niche on the high-value list above (top 5) | +10 |
| Missing about section | +5 |
| Broken images or links | +10 |

---

## Step 5 — Seasonal Targeting (Time Your Outreach Right)

| Niche | Best Time to Target | Why |
|-------|--------------------|----|
| HVAC | March-April and September-October | Before summer/winter rush |
| Landscaping | February-March | Before spring season |
| Pest Control | March-May | Before pest season |
| Roofers | March-April and after storms | Storm season leads |
| Plumbers | Year-round, spike in winter | Frozen pipes in winter |
| Accountants | October-January | Before tax season |
| Dentists | January (new year, new insurance) | Benefits reset |
| Contractors | January-February | Planning season |

---

## Step 6 — Present Results

Output a clean table like this:

```
📍 [NICHE] in [CITY] — Top Prospects

| # | Business | Website | Google Profile | Rating | Reviews | Score | Why They Need Help |
|---|----------|---------|---------------|--------|---------|-------|-------------------|
| 1 | Smith Plumbing | http://smithplumbing.com | [Maps Link] | 4.7⭐ | 87 | 85 | Wix site, no mobile, 2014 design |
| 2 | Joe's HVAC | https://joeshvac.net | [Maps Link] | 4.2⭐ | 43 | 70 | No testimonials, GoDaddy builder |
...

💡 Tip: #1 and #2 are hot leads — they have the reviews to justify investing in a real site.
```

Always include BOTH:
1. The **website URL** (so we can scrape it)
2. The **Google Maps/Business Profile URL** (so the user can verify it's real)

---

## Step 7 — Ask User to Choose

After presenting the table, say:
> "Which of these would you like me to build a new website for? Just give me the number or name, and I'll scrape their current site and generate a complete modern redesign as an HTML file you can preview by dragging to netlify.com/drop."

---

## Finding the Business Owner

After user picks a business, try to find the owner's contact:
1. **Google the business name + "owner"** — often shows in news/press
2. **LinkedIn search** — "[Business Name] [City]"
3. **Google Maps "About" tab** — sometimes lists owner name
4. **Their website's About page** — usually has team names
5. **Facebook Business Page** — "About" section often has owner name

---

## Important Rules

- SKIP national chains (Roto-Rooter, Servpro, Aspen Dental, etc.)
- SKIP businesses with no website at all (harder pitch — start with people who value web presence)
- SKIP businesses with clearly modern websites (already have good web presence)
- PRIORITIZE businesses with 4+ stars but old/bad websites — they have good service, just need marketing help
- ALWAYS show the Google Profile URL so the user can verify the business is real
- NOTE if a business is on Wix/Squarespace — that's a strong pitch angle ("stop renting your website")