# Generate Website — Skill

When given a URL to rebuild, follow this exact process.

## Step 1 — Scrape the Current Site

**Read scraper.md for the complete extraction process.**

Quick summary:
- WebFetch the URL and extract: name, phone, email, address, services, about text, testimonials, hours, license, year founded, review rating/count, team names, owner name
- If primary URL fails or is thin: try `/about`, `/services`, `/contact` pages, then Google Business Profile, then Facebook
- Output the Scrape Results summary (see scraper.md format) before generating
- Note which content is real vs. fabricated so user knows what to replace

**The more real data you extract, the better the site. Never skip this step.**

---

## Step 2 — Select Design System

Based on the business niche, choose from master-design.md color palette:

| Niche | Palette | Font |
|-------|---------|------|
| Law/Legal | Dark blue + gold | Playfair Display |
| Plumbing | Blue + orange | Inter |
| HVAC | Red + amber | Inter or Raleway |
| Electrical | Dark gray + yellow | Oswald |
| Roofing/Contractors | Amber + stone | Oswald |
| Landscaping/Pest | Green + lime | Montserrat |
| Dental/Chiro/Medical | Cyan + sky | Plus Jakarta Sans |
| Auto Repair | Gray + orange | Barlow Condensed |
| Real Estate/Finance | Indigo + violet | DM Serif Display |
| Veterinarian | Violet + emerald | Nunito |

### Niche Design Direction (What Combination to Use)

Each niche has a specific "feel" — match it:

**Plumbers:**
- Hero: Dark gradient (blue-900 → blue-800), NOT light/white
- Accent buttons: Orange (urgency, action)
- Effects: Shimmer on primary CTA, blob behind hero, animated counters
- Mood: Reliable, urgent, available 24/7 — like calling a dependable friend at 2am

**HVAC:**
- Hero: Bold red gradient or dark blue gradient (seasonal split — summer=cool blue, winter=warm red)
- Effects: Animated gradient hero, stats bar with counters, shimmer CTA
- Mood: Technical authority + emergency availability

**Electricians:**
- Hero: Near-black (#111827) with yellow accent — electric, powerful
- Effects: Subtle dot grid background on services section, yellow glows on CTAs
- Mood: Precise, professional, safety-focused — not flashy

**Roofers:**
- Hero: Earth tone gradient (amber-800 → stone-900), bold Oswald headings
- Unique section: Before/after slider for project showcase
- Mood: Rugged craftsmanship, storm damage urgency, protection

**Dentists:**
- Hero: Light/white-first (NOT dark) with cyan accents
- Effects: Soft shadows (no harsh dark backgrounds), gentle fade-ins
- Unique: New patient special offer prominently displayed
- Mood: Clean, calming, professional, no fear — welcoming

**Chiropractors:**
- Hero: Teal gradient, clean layout
- Unique: Progress bars for "Customer Satisfaction 98%" in about section
- Mood: Healing, health, relief from pain

**Landscapers:**
- Hero: Rich green gradient, outdoor photography
- Effects: Floating animation on hero icons, bright lime accent
- Mood: Vibrant, natural, outdoor pride

**Law Firms:**
- Hero: Deep navy + gold, Playfair Display serif font, minimal animation
- AVOID: Excessive effects, playful animations
- Mood: Authoritative, professional, fighting for justice

**Auto Repair:**
- Hero: Dark (#1f2937) with orange accent, Barlow Condensed headings
- Unique: Trust badges (ASE certified, warranty, written estimates) very prominent
- Mood: Honest, blue-collar, no-nonsense

**Pest Control:**
- Hero: Dark green + red accent (danger/elimination theme)
- Unique: "Guaranteed results" banner above fold
- Mood: Precision, problem elimination, peace of mind

---

## Step 2b — Image Strategy

Use real scraped images first. When none are available, use LoremFlickr placeholder URLs:

```
https://loremflickr.com/1200/800/[keyword]
```

**Keyword by niche:**
| Niche | Hero Image URL | About/Team URL |
|-------|---------------|----------------|
| Plumber | `https://loremflickr.com/1200/800/plumber` | `https://loremflickr.com/600/400/plumbing` |
| HVAC | `https://loremflickr.com/1200/800/hvac,technician` | `https://loremflickr.com/600/400/airconditioning` |
| Electrician | `https://loremflickr.com/1200/800/electrician` | `https://loremflickr.com/600/400/electrical` |
| Roofer | `https://loremflickr.com/1200/800/roofing` | `https://loremflickr.com/600/400/roof` |
| Landscaping | `https://loremflickr.com/1200/800/landscaping` | `https://loremflickr.com/600/400/garden` |
| Dentist | `https://loremflickr.com/1200/800/dentist` | `https://loremflickr.com/600/400/dental` |
| Chiropractor | `https://loremflickr.com/1200/800/chiropractic` | `https://loremflickr.com/600/400/spine` |
| Auto Repair | `https://loremflickr.com/1200/800/mechanic` | `https://loremflickr.com/600/400/autorepair` |
| Pest Control | `https://loremflickr.com/1200/800/exterminator` | `https://loremflickr.com/600/400/pestcontrol` |
| Law Firm | `https://loremflickr.com/1200/800/lawyer` | `https://loremflickr.com/600/400/attorney` |

**IMPORTANT:** Always add `loading="lazy"` to all images below the fold. Add `loading="eager"` to the hero image only.

When you use placeholder images, add an HTML comment noting they should be replaced:
```html
<!-- TODO: Replace with real team/business photos before sending to client -->
<img src="https://loremflickr.com/1200/800/plumber" alt="Smith Plumbing team" loading="eager" class="w-full h-full object-cover">
```

---

## Step 3 — Fill in the Content

Use REAL scraped content everywhere possible. If data is missing, use these niche defaults:

### Hero Headlines by Niche (use real scraped headline first, these are fallbacks)

**Plumbers:**
- "[City]'s Most Reliable Plumber — Available 24/7"
- "Fast, Honest Plumbing Service in [City]"
- "Your [City] Plumber — Same-Day Service, Upfront Prices"

**HVAC:**
- "Keep [City] Comfortable — Expert HVAC Service Since [Year]"
- "[City]'s Trusted Heating & Cooling Specialists"
- "Fast AC Repair & Heating Service in [City] — 24/7"

**Electricians:**
- "Licensed Electricians in [City] — Safe, Fast, Reliable"
- "Expert Electrical Service for [City] Homes & Businesses"
- "[City]'s Trusted Electrician — Residential & Commercial"

**Roofers:**
- "Quality Roofing in [City] — Trusted Since [Year]"
- "[City]'s Top-Rated Roofing Contractor — Free Estimates"
- "Protect Your Home: Expert Roofing in [City]"

**Dentists:**
- "Your [City] Dentist — Comfortable Care for the Whole Family"
- "Modern Dental Care in [City] — Accepting New Patients"
- "Smile Brighter: [City]'s Trusted Family Dentist"

**Law Firms (Personal Injury):**
- "Injured in [City]? Fight Back with [Firm Name]"
- "[City] Personal Injury Attorneys — We Win or You Pay Nothing"
- "Get the Compensation You Deserve — [City] Injury Lawyers"

**Landscaping:**
- "Beautiful Yards Start Here — [City]'s Landscaping Experts"
- "Expert Lawn Care & Landscaping in [City] Since [Year]"
- "Transform Your Outdoor Space — [City]'s Trusted Landscapers"

**Auto Repair:**
- "[City]'s Honest Auto Repair Shop — Fair Prices, Expert Work"
- "ASE-Certified Auto Repair in [City] — We Fix It Right"
- "Your Trusted [City] Mechanic — Fast, Honest, Affordable"

---

### Default Service Lists by Niche (when scraped site has no services)

**Plumbers:** Drain Cleaning, Water Heater Repair/Replacement, Leak Detection & Repair, Pipe Repair & Replacement, Toilet Repair & Installation, Sewer Line Services, Emergency Plumbing, Faucet & Fixture Installation

**HVAC:** AC Repair & Service, Heating Repair & Service, AC Installation, Furnace Installation, Duct Cleaning & Sealing, Thermostat Replacement, Preventive Maintenance Plans, Emergency HVAC Service

**Electricians:** Electrical Panel Upgrades, Outlet & Switch Installation, Ceiling Fan Installation, Lighting Installation, EV Charger Installation, Generator Installation, Safety Inspections, Rewiring Services

**Roofers:** Roof Replacement, Roof Repair, Roof Inspection, Storm Damage Repair, Shingle Replacement, Gutter Installation & Repair, Flat Roof Systems, Emergency Tarping

**Landscaping:** Lawn Mowing & Edging, Landscape Design, Sod Installation, Tree & Shrub Trimming, Irrigation Systems, Mulching & Beds, Seasonal Cleanup, Commercial Landscaping

**Dentists:** Teeth Cleaning & Exams, Teeth Whitening, Dental Fillings, Crowns & Bridges, Dental Implants, Invisalign/Aligners, Emergency Dental Care, Children's Dentistry

**Chiropractors:** Chiropractic Adjustments, Back & Neck Pain Treatment, Sports Injury Recovery, Auto Accident Injuries, Headache Treatment, Posture Correction, Massage Therapy, X-Ray Services

**Auto Repair:** Oil Change & Maintenance, Brake Repair & Replacement, Engine Diagnostics, Transmission Service, Tire Services, AC Repair, Battery Replacement, Suspension & Steering

**Pest Control:** General Pest Control, Termite Treatment, Rodent Control, Bed Bug Treatment, Mosquito Control, Ant Extermination, Wasp & Bee Removal, Monthly Maintenance Plans

**Law Firm (PI):** Car Accident Claims, Truck Accident Cases, Slip & Fall Injuries, Workplace Accidents, Wrongful Death, Medical Malpractice, Motorcycle Accidents, Free Consultation

---

## Step 3b — Upgrade the Copy

**Read copywriting.md for the complete transformation guide.**

Before generating, upgrade every piece of content:

| What you have | What to write |
|---------------|---------------|
| "Quality plumbing services" | "[City]'s plumber that actually shows up — same day, honest price" |
| "We've been in business for 15 years" | "15 years means we've seen every problem twice — and we know how to fix it" |
| "Contact us for a quote" | "Get your free estimate in 60 seconds — no commitment" |
| Generic service list | Benefit-focused descriptions (see copywriting.md) |
| No testimonials | 3 specific, realistic reviews (see copywriting.md format) |
| "We are licensed and insured" | "Licensed #[NUM], insured for $2M — your home is protected" |

**Apply the "So What?" test to every headline, subhead, and CTA before including it.**

---

## Step 4 — Generate the Complete HTML File

Build the full single-file website using the components in design-system.md and master-design.md.

**Required sections in this order:**
1. `<head>` — meta tags, Tailwind CDN, Google Fonts, Tailwind config
2. Sticky navigation with phone CTA + hamburger menu
3. Hero — gradient bg, headline, 2 CTAs, 3 trust badges, Google Reviews badge
4. Stats bar — animated counters (years, customers, rating)
5. Services grid — all services with icons
6. About section — text + stats + team photo or gradient visual
7. Why Choose Us — 4-grid with emojis
8. Testimonials — 3 cards with star ratings and names
9. FAQ section — 6-8 questions specific to the niche (see conversion-psychology.md)
10. CTA banner — gradient, phone number large
11. Contact section — info left + form right
12. Footer — 3 columns + NAP + copyright
13. Sticky mobile call bar — always last in body, before scripts
14. Scripts — mobile menu toggle, scroll animations (reveal), animated counters, FAQ accordion, sticky header

**Premium effects to include:**
- Glassmorphic navbar (transparent → frosted on scroll)
- Blob animations behind hero content
- `.reveal` class on all sections for scroll-triggered fade-in
- Shimmer effect on primary CTA button
- Animated stat counters with easing
- Smooth FAQ accordion (max-height animation, not toggle hidden)

---

## Step 5 — SEO Meta Tags (Add to Every Site)

```html
<!-- Add inside <head> after charset/viewport -->
<meta name="description" content="[CITY]'s trusted [NICHE]. [KEY BENEFIT]. Call [PHONE] for a free estimate. Serving [CITY] and surrounding areas since [YEAR].">
<meta name="keywords" content="[niche] [city], [niche] near me, [city] [niche], best [niche] [city]">
<link rel="canonical" href="https://[domain].com">

<!-- Open Graph (for social sharing) -->
<meta property="og:title" content="[BUSINESS NAME] | [CITY] [NICHE]">
<meta property="og:description" content="[CITY]'s trusted [NICHE] since [YEAR]. [KEY BENEFIT].">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">

<!-- Local Business Schema — validated format (Google Rich Results) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "[ServiceType]",
  "@id": "[WEBSITE_URL]#business",
  "name": "[BUSINESS NAME]",
  "description": "[BUSINESS DESCRIPTION]",
  "url": "[WEBSITE_URL]",
  "telephone": "[PHONE]",
  "email": "[EMAIL]",
  "image": "[HERO_IMAGE_URL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ADDRESS]",
    "addressLocality": "[CITY]",
    "addressRegion": "[STATE_ABBR]",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[RATING]",
    "reviewCount": "[REVIEW_COUNT]",
    "bestRating": "5",
    "worstRating": "1"
  },
  "areaServed": {
    "@type": "City",
    "name": "[CITY]"
  }
}
</script>
```

**Validate the schema** at: search.google.com/test/rich-results (paste the HTML, check for errors)

**@type by niche:**
- Plumber → `Plumber`
- HVAC → `HVACBusiness`
- Electrician → `Electrician`
- Dentist → `Dentist`
- Chiropractor → `MedicalClinic`
- Auto Repair → `AutoRepair`
- Lawyer → `LegalService`
- Landscaping → `LandscapingBusiness`
- General → `LocalBusiness`

---

## Step 6 — Quality Checklist Before Saving

- [ ] No `[PLACEHOLDER]` brackets anywhere in the HTML
- [ ] Phone number is a `tel:` link everywhere it appears
- [ ] Phone appears 4+ times (nav, hero, CTA banner, footer)
- [ ] Sticky mobile call bar is present
- [ ] Mobile menu button works
- [ ] All anchor links go to real section IDs
- [ ] Form submit shows a friendly alert
- [ ] Tailwind CDN script is in `<head>`
- [ ] Google Fonts loaded with preconnect
- [ ] All sections present: Nav, Hero, Stats, Services, About, Why Us, Testimonials, FAQ, CTA, Contact, Footer
- [ ] LocalBusiness JSON-LD schema in `<head>`
- [ ] Smooth scroll enabled (`html { scroll-behavior: smooth; }`)
- [ ] `.reveal` observer script is present
- [ ] Animated counter script is present
- [ ] Gradient matches the niche color palette
- [ ] Fonts match the niche typography recommendation
- [ ] Site would look good on 375px mobile screen

---

## Step 7 — Save the File

Save the HTML to:
```
c:/Users/bryce/OneDrive/Desktop/AI Website Builder/generated-sites/[business-name-city].html
```

Use the business name and city in the filename, lowercase, hyphens:
Example: `smiths-plumbing-austin-tx.html`

---

## Step 8 — Report to User

After saving, tell the user:
```
✅ Website generated for [BUSINESS NAME]

📁 File saved: generated-sites/[filename].html
🌐 To preview: Double-click the file to open in your browser
📤 To get a live link: Drag the file to netlify.com/drop (free, 10 seconds)

What I included:
- [X] real services (or [X] niche defaults)
- [X] real testimonials (or [X] written ones)
- LocalBusiness schema for SEO
- Sticky mobile call bar
- Phone: [PHONE] ([was real / placeholder])
- Email: [EMAIL] ([was real / placeholder])

Want me to adjust anything? (colors, headline, add/remove sections)
```

---

## Important Rules

- NEVER output partial HTML — always the complete file
- NEVER leave placeholder brackets `[LIKE THIS]` in the final HTML
- ALWAYS use the real phone number as a `tel:` link
- ALWAYS make it better than what they have — that's the whole point
- If the original site has almost no content, use niche defaults above
- The generated site should look like it cost $3,000-5,000 to build
- Include the sticky mobile call bar on EVERY site — it's non-negotiable