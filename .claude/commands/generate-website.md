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

If WebFetch fails (JavaScript-heavy site), note what was extractable and work with that.

## Step 2 — Select Design System

Based on the business niche, choose from the design-system.md color palette:
- Law/Legal → Dark blue + gold (Playfair Display font)
- Plumbing/HVAC → Blue + orange (Inter font)
- Electrical → Red + yellow (Raleway font)
- Roofing/Contractors → Amber + stone (Oswald font)
- Landscaping/Pest → Green + lime (Montserrat font)
- Dental/Chiro/Medical → Cyan + sky (Plus Jakarta Sans font)
- Auto Repair → Gray + orange (Barlow font)
- Real Estate/Finance → Indigo + violet (DM Serif font)

## Step 3 — Fill in the Content

Use REAL scraped content everywhere possible. If data is missing:
- Phone: use "(555) 000-0000" placeholder
- Email: use "info@[businessname].com" placeholder
- Testimonials: write 3 realistic ones in the style of Google reviews
- Services: infer from the niche (e.g., plumber → drain cleaning, water heater repair, etc.)
- Hero text: write a compelling, specific headline (NOT generic)
- About: write 2-3 sentences about the business using city + niche

## Step 4 — Generate the Complete HTML File

Build the full single-file website using the components in design-system.md:

**Required sections in this order:**
1. `<head>` with all meta, Tailwind CDN, Google Fonts
2. Sticky navigation with phone CTA
3. Hero (gradient bg, headline, 2 CTAs, 3 trust badges)
4. Services grid (3 columns, all services listed)
5. About section (2 columns: text + stats/highlights)
6. Why Choose Us (4 grid items with emojis)
7. Testimonials (3 cards with star ratings)
8. CTA banner (gradient, phone number big)
9. Contact section (info + form side by side)
10. Footer (3 columns + copyright)
11. Mobile menu JavaScript

**Quality checklist before outputting:**
- [ ] Phone number appears 4+ times (nav, hero, CTA, footer)
- [ ] Mobile hamburger menu works
- [ ] All section anchor links work (href="#services" etc.)
- [ ] Smooth scroll enabled
- [ ] Form shows alert on submit
- [ ] No broken placeholder `[TEXT]` left in final output
- [ ] Tailwind CDN script is present
- [ ] Google Fonts are loaded

## Step 5 — Save the File

Save the HTML to:
```
c:/Users/bryce/OneDrive/Desktop/AI Website Builder/generated-sites/[business-name-city].html
```

Use the business name and city in the filename, lowercase, hyphens instead of spaces.
Example: `smiths-plumbing-austin.html`

## Step 6 — Report to User

After saving, tell the user:
```
✅ Website generated for [BUSINESS NAME]

📁 File saved: generated-sites/[filename].html
🌐 To preview: Open the file in your browser (double-click it)
📤 To send to client: Drag the file to netlify.com/drop for a free live URL

What was included:
- [X] services from their current site
- [X] real testimonials (or [X] written ones)
- Phone: [PHONE]
- Email: [EMAIL]

Want me to adjust anything? (colors, content, add/remove sections)
```

## Important Rules

- NEVER output partial HTML — always the complete file
- NEVER leave placeholder brackets `[LIKE THIS]` in the final HTML
- ALWAYS use the real phone number as a `tel:` link
- ALWAYS make it better than what they have — that's the whole point
- If the original site has almost no content, invent realistic content for the niche
- The generated site should look like it cost $3,000-5,000 to build
