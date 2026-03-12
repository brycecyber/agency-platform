# SCRAPER — Maximum Extraction Guide
# How to get everything useful from any local business website via WebFetch
# The better the extraction, the better the final site. Never skip this step.

---

## THE CORE PRINCIPLE

Every piece of real information is worth 10x a placeholder.
- Real phone number → builds trust
- Real service list → shows expertise
- Real testimonial quote → converts better than anything we write
- Real owner name → feels personal, authentic
- Real year founded → credibility anchor

**Extract first. Generate only when nothing is available.**

---

## Step 1 — WebFetch the Primary URL

```
WebFetch: [URL]
Goal: Extract all business information
```

**What to look for and extract:**

### Contact Information
- [ ] Phone number (primary + emergency line if different)
- [ ] Email address
- [ ] Physical address (street, city, state, zip)
- [ ] Service area (what cities/areas they mention serving)
- [ ] Hours of operation (M-F, weekends, emergency hours)

### Business Identity
- [ ] Business name (exactly as used)
- [ ] Tagline or slogan (if present)
- [ ] Year founded / "in business since X"
- [ ] Owner name(s)
- [ ] Number of employees or team members mentioned
- [ ] License numbers / certifications mentioned
- [ ] BBB rating or accreditation
- [ ] Awards or recognitions

### Services
- [ ] All services listed (exact names they use)
- [ ] Any pricing mentioned (hourly rates, flat fees, free estimates)
- [ ] Emergency vs scheduled services
- [ ] Specialties or niche focus areas
- [ ] Brands/manufacturers they work with

### Social Proof
- [ ] Testimonial quotes (exact text, name, any location)
- [ ] Review count mentioned ("200+ reviews", "4.9 stars")
- [ ] Case studies or project descriptions
- [ ] Before/after content
- [ ] Number of jobs completed ("served 500+ customers")

### Visual Assets
- [ ] Logo URL (look for `<img>` tags with "logo" in src or alt)
- [ ] Team photo URLs
- [ ] Before/after photo URLs
- [ ] Any hero images worth noting

### SEO Data (From `<head>`)
- [ ] `<title>` tag text — tells us what keywords they target
- [ ] `<meta name="description">` — their existing positioning
- [ ] Any structured data / schema already present

---

## Step 2 — If the Primary Site Is Thin, Go Further

### Scrape Their Google Business Profile
Search for: `[Business Name] [City]` and WebFetch the Google Maps result.
Look for:
- Star rating and total review count
- Business category
- Recent reviews (first 3-5 are gold)
- Q&A section
- Posts they've made
- Photo count

### Scrape Their Facebook Page
Search for: `[Business Name] [City] site:facebook.com`
Look for:
- "About" section (often has founding year, owner info)
- Customer reviews/recommendations tab
- Recent posts (see what services they actively promote)
- Follower count (social proof signal)

### Scrape Their Yelp Profile
Search for: `[Business Name] [City] site:yelp.com`
Look for:
- Categories listed
- Business attributes (accepts credit cards, free estimates, etc.)
- Review highlights
- Owner response style (tells us about their voice/personality)

---

## Step 3 — Extraction Patterns (What to Find in Raw HTML)

### Phone Numbers
Look for these patterns:
```
tel: links → <a href="tel:+1XXXXXXXXXX">
Formatted: (555) 555-5555 or 555-555-5555 or 555.555.5555
In header/footer (always look there first)
```

### Email Addresses
```
mailto: links → <a href="mailto:info@business.com">
Contact page forms (look for placeholder text)
Footer NAP block
```

### Hours
```
Usually in footer, contact page, or sidebar
Look for: "Mon-Fri", "Monday through Friday", "M-F", "Open 24/7"
Look for: tables, definition lists, or paragraph text near "Hours" heading
```

### License Numbers
```
Look for: "License #", "Lic. #", "Licensed", "ROC #", "CSLB #"
Usually near footer, about page, or trust badge section
```

### Year Founded
```
Look for: "Since XXXX", "Est. XXXX", "Founded in XXXX", "Serving [City] since XXXX"
Also check: copyright year in footer (gives a lower bound)
```

### Service Area
```
Look for: "Serving", "We serve", city/town lists
Look for: embedded Google Maps (tells us the center point)
Look for: "Service Area" or "Coverage Area" headings
```

---

## Step 4 — Content Quality Assessment

After scraping, rate what you have:

| Content Type | Grade A (Real) | Grade B (Inferable) | Grade C (Must Fabricate) |
|-------------|---------------|---------------------|--------------------------|
| Business name | ✓ Exact match | — | — |
| Phone | ✓ Real number | ✓ Google listing | ✗ Use placeholder |
| Services | ✓ Listed on site | ✓ From niche defaults | ✗ Standard niche list |
| About text | ✓ From About page | ✓ From "Our story" | ✗ Write for niche |
| Testimonials | ✓ From site | ✓ From Google reviews | ✗ Write 3 realistic ones |
| Year founded | ✓ Stated | ✓ Copyright year - 2 | ✗ Use "over X years" |
| Owner name | ✓ From site | ✓ From Facebook/LinkedIn | ✗ Omit |

---

## Step 5 — Handle These Specific Scenarios

### JavaScript-Heavy Site (React, Vue, Angular)
WebFetch returns near-empty HTML. Do this:
1. Try fetching `/sitemap.xml` — sometimes reveals all page URLs
2. Try fetching `/about`, `/services`, `/contact` pages directly
3. Try fetching their Google Business Profile for all key info
4. Use their social media profiles to fill gaps
5. Build the site with niche defaults + whatever you could find

### Wix/Squarespace Sites
These often render partially. Extra things to check:
- Their URL structure often reveals pages: add `/about`, `/services`
- Wix sites sometimes have a raw JSON data endpoint

### Password-Protected or Blocked Sites
Signs: `403 Forbidden`, `Access Denied`, empty response
Do this:
1. Note the URL structure and try subpages
2. Use Google's cache: search `cache:[URL]`
3. Use the Wayback Machine concept — note what info we can get from Google search snippets
4. Fall back to Google Business Profile + Facebook

### Extremely Basic Site (1-2 pages, minimal content)
This is actually ideal for your pitch — the more basic their site, the more dramatic the improvement.
Extract what's there, fill the rest with niche defaults, and flag it in the report:
```
Note: Original site had minimal content. Services and about text use industry-standard
content for [niche] businesses. Replace with real specifics before final delivery.
```

---

## Step 6 — Extraction Checklist Before Generating

Before moving to generation, confirm you have at minimum:

**Must Have (site cannot generate without these):**
- [ ] Business name
- [ ] Niche / industry
- [ ] City / location

**Should Have (use placeholders if missing):**
- [ ] Real phone number
- [ ] At least 3 services
- [ ] Some about/history text

**Nice to Have (improves quality significantly):**
- [ ] Real testimonials or review quotes
- [ ] Year founded
- [ ] Owner name
- [ ] License number
- [ ] Review count and rating
- [ ] Team photo URL
- [ ] Specific service area cities

---

## Scrape Output Format

After WebFetching, output this summary before generating:

```
📋 SCRAPE RESULTS — [BUSINESS NAME]
Source URL: [URL]
Status: [Full extract / Partial / Minimal / Blocked]

REAL DATA FOUND:
✅ Business Name: [name]
✅ Phone: [phone]
✅ Email: [email or "not found"]
✅ Address: [address or "not found"]
✅ Hours: [hours or "not found"]
✅ Services: [list or "using niche defaults"]
✅ Testimonials: [count found or "writing 3 realistic ones"]
✅ Year Founded: [year or "not found"]
✅ Rating: [X.X ⭐ (XXX reviews) or "not found"]

PLACEHOLDERS NEEDED:
⚠️ [list anything that needs to be fabricated]

QUALITY SCORE: [A/B/C — A=mostly real, C=mostly fabricated]
```

This transparency helps the user know what's real in the final site.