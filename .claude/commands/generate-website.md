# Generate Website — Skill

When given a URL to rebuild, follow this exact process.

## Step 1 — Scrape the Current Site

Use WebFetch on the URL to extract:
- Business name, phone, email, address
- All services offered
- About / history text
- Any testimonials or reviews mentioned
- Hours of operation
- Social media links
- Overall design impression (modern/outdated?)
- Hero headline or main value proposition
- Team member names (if listed)
- License number, certifications, years in business

**If WebFetch fails or returns minimal content:** Generate the site using the niche defaults below. Note which content is real vs. generated in your final report.

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

<!-- Local Business Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "[ServiceType]",
  "name": "[BUSINESS NAME]",
  "telephone": "[PHONE]",
  "email": "[EMAIL]",
  "url": "[WEBSITE_URL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ADDRESS]",
    "addressLocality": "[CITY]",
    "addressRegion": "[STATE]",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[LAT]",
    "longitude": "[LNG]"
  },
  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[RATING]",
    "reviewCount": "[REVIEW_COUNT]"
  },
  "areaServed": {
    "@type": "City",
    "name": "[CITY]"
  },
  "description": "[BUSINESS DESCRIPTION]"
}
</script>
```

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