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
4. GENERATE → Build complete HTML using design-system.md patterns
       ↓
5. SAVE → Write to generated-sites/[name-city].html
       ↓
6. REPORT → Tell user file location + how to preview + how to share
```

## Quick Commands

User can trigger any step by saying:

| User says | What to do |
|-----------|-----------|
| "find plumbers in Dallas TX" | Run find-businesses.md |
| "build that one" / "do #3" | Run generate-website.md on selected business |
| "scrape [URL]" | WebFetch URL and extract content, then generate |
| "evaluate [URL]" | Run evaluate-site.md scoring |
| "what cities should I target?" | Suggest cities (see below) |

## Best Cities to Target (High-Opportunity Markets)

**Large metro areas with tons of small businesses:**
- Austin, TX
- Nashville, TN
- Charlotte, NC
- Phoenix, AZ
- Denver, CO
- Tampa, FL
- Raleigh, NC
- Columbus, OH
- San Antonio, TX
- Jacksonville, FL

**Why these cities:**
- High population growth = more home service needs
- Lots of independent small businesses (not chains)
- Business owners are busy — less time to update their website
- Competitive market = more reason to stand out

## How to Pitch the Client

After generating the HTML, here's exactly what to say when reaching out:

**Cold email template:**
```
Subject: I built a free redesign of your website

Hi [First Name],

I noticed [Business Name]'s website and spent some time building a free modern redesign
— no obligation to look at it.

Here's a live preview: [Netlify URL]

I do web design for [niche] businesses in [City]. If you like it,
I typically charge $[PRICE] for a complete website like this.

Worth a 10-minute call?

[Your name]
[Phone]
```

**Cold call opener:**
```
"Hi, this is [Name] — I'm a web designer in [City].
I actually already built a free redesign of your website and wanted to show you.
Do you have 30 seconds to look at a link I can text you?"
```

**Pricing suggestions:**
- Basic website (what we build): $500 - $1,500 one-time
- With monthly maintenance: $100-200/month recurring
- With SEO setup included: $1,500 - $3,000 one-time

## Output Folder Structure

All generated sites save here:
```
c:/Users/bryce/OneDrive/Desktop/AI Website Builder/
├── generated-sites/
│   ├── smiths-plumbing-austin.html
│   ├── joes-hvac-nashville.html
│   └── downtown-dental-charlotte.html
└── agency-platform/          ← the dashboard app (for future use)
```

## Tips for Maximum Success

1. **Build first, pitch later** — having the demo ready before reaching out 3x increases response rate
2. **Target 4+ star businesses with old sites** — they have happy customers and just need better marketing
3. **Avoid niches you don't understand** — start with one niche (e.g., just plumbers) and get really good at that pitch
4. **Follow up 3 times** — most clients need 2-3 touches before responding
5. **Netlify Drop is your friend** — drag the HTML file to netlify.com/drop, get a live URL in 10 seconds, completely free
