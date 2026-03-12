# Evaluate a Business Website
# Given a URL, score opportunity and generate a pitch. Higher score = better prospect.

## Scoring System (0-100+)

### Technical Issues
| Signal | Points |
|--------|--------|
| No mobile responsiveness (no viewport meta, or breaks at 375px) | +20 |
| No SSL — site is http:// not https:// | +15 |
| Design looks 5+ years old (table layout, GIF backgrounds, no flexbox/grid) | +15 |
| Footer copyright year is 3+ years old | +10 |
| Site loads slowly (lots of images, no lazy loading, heavy page) | +10 |
| Broken images or 404 links visible | +10 |
| Site is clearly a free page builder (see detection guide below) | +10 |

### Missing Conversion Elements
| Signal | Points |
|--------|--------|
| No clear CTA above the fold | +15 |
| No phone number visible in header | +15 |
| No testimonials or reviews section | +15 |
| No contact form | +10 |
| No services section | +10 |
| No About section | +5 |
| No hours of operation listed | +5 |

### Business Opportunity Signals
| Signal | Points |
|--------|--------|
| 4.0+ star rating with 50+ reviews (good service, bad web presence) | +15 |
| High-value niche (plumber, HVAC, roofing, dental, law) | +10 |
| Business in operation 5+ years (investment-worthy) | +5 |
| Appears to not rank on Google for "[niche] [city]" keyword | +15 |

---

## Site Builder Detection Guide

Knowing what platform they're on helps estimate build cost and pitch angle.

| Platform | How to Detect | Pitch Angle |
|----------|--------------|-------------|
| **Wix** | `<meta name="wix-site-id">` OR `.wixsite.com` in URL OR `wixWindow` in JS | "Your Wix site limits your SEO — here's what a custom site gets you" |
| **Squarespace** | `<meta name="generator" content="Squarespace">` OR `assets.squarespace.com` in source | "Squarespace charges $25+/month — own your site instead" |
| **GoDaddy Builder** | `<meta name="generator" content="Starfield Technologies; Go Daddy Website Builder">` | "GoDaddy builder sites rank poorly on Google — here's proof" |
| **Weebly** | `weeblysite.com` in domain OR `weebly.com` in source scripts | Same as above |
| **Jimdo** | `jimdofree.com` domain OR `jimdo.com` in source | Same |
| **WordPress** | `wp-content/` in source OR `/wp-json` endpoint | "Your WordPress theme is outdated — here's a modern redesign" |
| **Custom / Hand-coded** | None of the above, cleaner HTML structure | Standard pitch |

**How to check:** Right-click → View Page Source → Ctrl+F → search for `generator` or `wix-site-id`

---

## Niche-Specific Issues to Look For

### Plumbers / HVAC / Electricians
- Emergency service number NOT prominently displayed (huge miss — 40% of calls are emergencies)
- No "Available 24/7" messaging
- No service area map or city list
- Missing license/certification number

### Roofers / Contractors
- No before/after photo gallery
- No financing options mentioned
- No warranty information
- No local insurance/bonding info

### Dentists / Chiropractors
- No online booking or scheduling link
- No insurance accepted list
- No team/doctor photo
- No new patient special or offer

### Law Firms
- No free consultation offer above fold
- No case results or settlements mentioned
- No attorney bio with photo
- No practice area pages

### Auto Repair
- No price transparency (oil change, brake, etc.)
- No ASE certification badge
- No warranty mention
- No loaner car / shuttle service info

---

## Output Format

```
Business: [name]
URL: [url]
Opportunity Score: [1-100+]
Platform: [Wix / Squarespace / WordPress / Custom / Unknown]
Design Age: ~[year estimate]

Missing Elements:
  ❌ [list each missing conversion element]

Technical Issues:
  🔧 [list technical problems]

Niche-Specific Gaps:
  ⚠️ [list industry-specific misses]

Verdict: [🔥 HOT LEAD / 🌡️ WARM LEAD / ⏭️ SKIP]

Pitch Angle:
  "[One specific sentence about what their site is missing that costs them customers]"

Best Outreach Channel: [Cold email / Cold call / In-person / LinkedIn]
```

---

## Verdict Guide

| Score | Verdict | Action |
|-------|---------|--------|
| 70+ | 🔥 HOT LEAD | Scrape and generate NOW — this is money |
| 40-69 | 🌡️ WARM LEAD | Worth doing — queue for generation |
| 20-39 | ⏭️ SOFT PASS | Might work — depends on niche and reviews |
| <20 | ❌ SKIP | Their site is decent enough they won't buy |

---

## Quick Evaluation (No WebFetch Needed)

If you can only see the URL and Google listing, use these fast signals:

1. **Google Maps photo count** — fewer than 5 photos = outdated operator
2. **Last review date** — active business + old site = perfect prospect
3. **Website listed on GMB?** — if no website shown = even bigger opportunity
4. **Google "site:domain.com"** — if only 1-2 indexed pages = terrible SEO
5. **Check footer on homepage** — copyright year tells you everything