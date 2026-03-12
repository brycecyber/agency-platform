# Evaluate a Business Website

Given a business name and URL, evaluate whether it's worth targeting for a website rebuild.

## Instructions:

1. Visit the URL (if possible) and assess:
   - Mobile responsiveness
   - Load time / performance feel
   - Design age (estimate year the design is from)
   - Presence of: hero section, services, about, testimonials, contact form, phone number
   - SSL certificate
   - Copyright year in footer

2. Score it 1-100 (higher = better opportunity):
   - +20 if no mobile responsiveness
   - +15 if no testimonials section
   - +15 if no clear CTA above fold
   - +10 if design looks 5+ years old
   - +10 if no contact form
   - +10 if no SSL (http://)
   - +5 if footer copyright year is 3+ years old
   - +5 if broken images detected
   - +5 if no about section

3. Output format:
```
Business: [name]
URL: [url]
Opportunity Score: [1-100]
Design Age: ~[year]
Missing:
  - [list what's missing]
Issues:
  - [list technical issues]
Verdict: [HOT LEAD / WARM LEAD / SKIP]
Pitch angle: [one sentence on how to approach them]
```

## Quick verdict guide:
- 60+ → HOT LEAD — scrape and generate immediately
- 30-59 → WARM LEAD — worth pursuing, queue for generation
- <30 → SKIP — their site is already decent
