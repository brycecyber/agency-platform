# LOCAL SEO — Rank the Sites We Build
# Every generated site should be able to rank for "[niche] [city]" within weeks.
# These are the exact on-page SEO elements that move the needle for local businesses.

---

## THE LOCAL SEO HIERARCHY

What matters most, in order:
```
1. Google Business Profile (not directly in our HTML, but our site supports it)
2. NAP Consistency (Name, Address, Phone — exact match in footer to GBP)
3. LocalBusiness Schema (JSON-LD in <head>)
4. On-page keyword optimization (H1, H2, title, meta, body text)
5. Page speed (Core Web Vitals — LCP, CLS, INP)
6. Mobile-first design
7. Inbound links (out of scope for us, but mention to clients)
```

---

## TITLE TAG FORMULA

```html
<title>[BUSINESS NAME] | [City] [Niche] | [Key Differentiator]</title>
```

**Max 60 characters. City + niche MUST appear.**

Examples:
- `Smith Plumbing | Austin TX Plumber | 24/7 Emergency Service`
- `Clear Air HVAC | Nashville Heating & Cooling | Same-Day Service`
- `Family First Dental | Charlotte NC Dentist | New Patients Welcome`
- `Rooftop Pro | Phoenix AZ Roofer | Free Inspections`

---

## META DESCRIPTION FORMULA

```html
<meta name="description" content="[City]'s trusted [niche] since [year]. [Key benefit 1]. [Key benefit 2]. Call [phone] for a free [estimate/consultation/inspection].">
```

**Max 160 characters. Include city, niche, phone, and free offer.**

Example:
`Austin's trusted plumber since 2009. Same-day service, upfront pricing, 24/7 emergency response. Call (512) 555-0100 for a free estimate.`

---

## H1 / H2 / H3 STRUCTURE

The page should have exactly this heading architecture:

```
<h1> — One per page. City + niche + outcome. (Hero headline)
  <h2> — Our Services (services section header)
    <h3> — [Specific Service Name] (each service card)
  <h2> — About [Business Name] (about section)
  <h2> — Why [City] Trusts Us (why-choose-us)
  <h2> — What Our Customers Say (testimonials)
  <h2> — We Serve [City] & Surrounding Areas (service area)
  <h2> — Frequently Asked Questions (FAQ)
  <h2> — Get Your Free [Quote/Estimate/Consultation] (CTA)
  <h2> — Contact [Business Name] (contact section)
```

**H2s should organically include the city name when possible.**

---

## KEYWORD PLACEMENT RULES

### Primary Keyword: `[niche] [city]` (e.g., "plumber Austin")
Must appear in:
- [ ] Title tag
- [ ] Meta description
- [ ] H1 headline
- [ ] First paragraph of body text (hero subtext or first section)
- [ ] At least 2-3 H2s
- [ ] Footer NAP text

### Secondary Keywords (long-tail — use naturally in body copy):
```
[niche] near me [city]
emergency [niche] [city]
best [niche] [city]
[niche] [city] [state]
[specific service] [city] (e.g., "drain cleaning Austin")
licensed [niche] [city]
```

### Keyword Density Rule:
- Primary keyword: 1-2% of body text (appears ~8-15 times on a full page)
- Secondary keywords: once each, naturally placed
- NEVER stuff keywords — if it sounds unnatural, rewrite it

---

## SERVICE AREA SEO (City + Neighborhood Optimization)

In the service area section, list all cities/neighborhoods served:

```html
<section id="service-area">
  <h2>Serving [Primary City] and Surrounding Areas</h2>
  <p>Our [niche] team serves homeowners and businesses throughout [City], [Suburb 1],
     [Suburb 2], [Suburb 3], and [Suburb 4]. Not sure if we cover your area?
     Call us — if we can't help, we'll point you in the right direction.</p>

  <!-- City grid -->
  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
    <div>✓ [Primary City] (Main Service Area)</div>
    <div>✓ [Suburb 1]</div>
    <div>✓ [Suburb 2]</div>
    ...
  </div>
</section>
```

**Why this matters:** Google looks for these city mentions to confirm local service area. Each city listed is a potential ranking keyword.

---

## NAP CONSISTENCY (Critical for Local Pack Rankings)

The footer MUST contain exact Name, Address, Phone matching Google Business Profile:

```html
<!-- Footer NAP — must match GBP exactly -->
<address class="not-italic text-gray-400 text-sm">
  <strong>[EXACT BUSINESS NAME]</strong><br>
  [STREET ADDRESS]<br>
  [CITY], [STATE ABBR] [ZIP]<br>
  <a href="tel:[PHONE]">[PHONE FORMATTED EXACTLY AS ON GBP]</a>
</address>
```

**Common mistake:** GBP says "St." but website says "Street" — this mismatch hurts rankings. Use EXACTLY the same formatting.

---

## IMAGE ALT TEXT PATTERNS

Every image needs an alt text that includes the business name or niche + city:

```html
<!-- Hero -->
<img alt="[Business Name] plumbers serving Austin TX">

<!-- Team photo -->
<img alt="[Business Name] team of licensed plumbers in Austin">

<!-- Service image -->
<img alt="Professional drain cleaning service in Austin TX">

<!-- Before/after -->
<img alt="Roof replacement before and after - Austin home">
```

**Never:** `<img alt="">` or `<img alt="image1.jpg">`

---

## PAGE SPEED (Core Web Vitals Checklist)

Our generated sites are already optimized, but verify:

| Signal | Target | How We Achieve It |
|--------|--------|------------------|
| LCP | < 2.5s | No heavy JS frameworks, hero image has `loading="eager"` |
| CLS | < 0.1 | Explicit image dimensions, no late-loading fonts |
| INP | < 200ms | Vanilla JS only, no React/jQuery |
| TTFB | < 600ms | Pure HTML, no server-side rendering |

**Netlify CDN hosting** gives us global edge delivery automatically — this is another reason to use netlify.com/drop.

---

## INTERNAL LINKING

On single-page sites, every nav link = internal link. Make sure:
- Every section has an `id` matching the nav `href`
- Footer links repeat all nav links
- CTA buttons within sections link to `#contact`

```html
<!-- Good internal link -->
<a href="#services">See Our Services</a>
<a href="#contact">Get a Free Estimate</a>
```

---

## CONTENT FRESHNESS SIGNALS

Add these to tell Google the page is current:

```html
<!-- In <head> -->
<meta name="article:modified_time" content="2025-03-12">

<!-- In footer -->
<p>© 2025 [BUSINESS NAME]...</p>  <!-- Always current year -->
```

---

## GOOGLE BUSINESS PROFILE OPTIMIZATION (Upsell Service)

The website is only half the battle. Tell clients this when pitching:

**Free actions that boost rankings:**
1. Add 10+ photos (interior, team, work in progress, completed jobs)
2. Set ALL relevant business categories (primary + secondary)
3. Fill in ALL attributes (accepts credit cards, free estimates, etc.)
4. Respond to every review (even negative ones — professionally)
5. Post weekly updates (special offers, seasonal tips)
6. Add services list matching the website
7. Enable messaging feature

**Pitch angle:** "The website I built gets you looking great when people click through. I can also spend an hour optimizing your Google Business Profile so more people find you in the first place. That's another $200-300 one-time, or included in my monthly plan."

---

## SEO AUDIT QUICK CHECKLIST

Before delivering any site, verify:
- [ ] Title tag has city + niche + differentiator (under 60 chars)
- [ ] Meta description has city + niche + phone + free offer (under 160 chars)
- [ ] H1 includes city + niche + outcome
- [ ] "Austin plumber" (or equivalent) appears in first 100 words
- [ ] Service area section lists 6+ nearby cities
- [ ] Footer has exact NAP (name, address, phone)
- [ ] All images have descriptive alt text
- [ ] LocalBusiness JSON-LD schema in `<head>`
- [ ] No broken links
- [ ] Page loads fast (no unused CSS, minimal JS, no render-blocking)