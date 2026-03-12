# Find Local Businesses — Skill

When the user says "find businesses in [city]" or "search [niche] in [city]", follow this exact process.

## Step 1 — Understand the Request

Extract:
- **City** (e.g. "Austin, Texas" or "Austin TX")
- **Niche** — if not specified, default to searching ALL high-value niches below
- **Limit** — default to top 10 most desperate leads

## High-Value Niches (Prioritized)

These businesses historically have the worst websites and highest ROI for a redesign:
1. Plumbers
2. HVAC / Heating & Cooling
3. Electricians
4. Roofers
5. Landscapers / Lawn Care
6. Pest Control
7. Chiropractors
8. Dentists
9. Auto Repair Shops
10. Law Firms (personal injury, family, criminal)
11. Accountants / CPAs
12. Insurance Agents
13. Veterinarians
14. General Contractors
15. Pressure Washing / Window Cleaning

## Step 2 — Search for Businesses

Use WebSearch with these queries:
- `"[niche] [city]" site:google.com/maps` OR
- `"[niche] near [city]" -yelp.com -angi.com -homeadvisor.com`
- `"best [niche] in [city]"`

For each result, try to find:
- Business name
- Website URL
- Google Maps / Google Business Profile URL
- Phone number
- Approximate rating (if visible)
- Number of reviews (if visible)

## Step 3 — Score Each Business (Opportunity Score)

Score how desperately they need a new website. Higher = better prospect.

| Signal | Points |
|--------|--------|
| Website loads slowly / feels old | +20 |
| No mobile responsiveness | +20 |
| Copyright year in footer is 3+ years old | +15 |
| No testimonials / reviews section | +15 |
| No clear phone number above the fold | +15 |
| No services section | +10 |
| No SSL (http:// not https://) | +15 |
| 50+ Google reviews (established, worth investing) | +10 |
| Rating 4.0+ stars (good service, just bad web presence) | +10 |
| Niche on the high-value list above | +10 |
| Missing about section | +5 |
| Broken images or links | +10 |
| Website is clearly a free template (Wix, GoDaddy builder) | +10 |

## Step 4 — Present Results

Output a clean table like this:

```
📍 [NICHE] in [CITY] — Top Prospects

| # | Business | Website | Google Profile | Rating | Reviews | Score | Why They Need Help |
|---|----------|---------|---------------|--------|---------|-------|-------------------|
| 1 | Smith Plumbing | http://smithplumbing.com | [Maps Link] | 4.7⭐ | 87 | 85 | No mobile, 2014 design, no testimonials |
| 2 | Joe's HVAC | https://joeshvac.net | [Maps Link] | 4.2⭐ | 43 | 70 | Wix template, no services section |
...
```

Always include BOTH:
1. The website URL (so we can scrape it)
2. The Google Maps/Business Profile URL (so the user can verify it's real)

## Step 5 — Ask User to Choose

After presenting the table, say:
> "Which of these would you like me to build a new website for? Just give me the number or name, and I'll scrape their current site and generate a complete modern redesign as an HTML file."

## Important Rules

- SKIP national chains (Roto-Rooter, Servpro, Aspen Dental, etc.)
- SKIP businesses with no website at all (harder to pitch)
- SKIP businesses with clearly modern websites (already have good web presence)
- PRIORITIZE businesses with 4+ stars but old/bad websites — they have good service, just need marketing help
- Always show the Google Profile URL so the user can verify the business is real before spending time on it
