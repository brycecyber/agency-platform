/**
 * AI Website Generator
 * Uses Claude claude-opus-4-6 to generate a complete, modern, single-file HTML website
 * from scraped business data. Returns ready-to-preview HTML.
 */

import Anthropic from '@anthropic-ai/sdk'
import type { ScrapedContent } from './scraper'

const client = new Anthropic()

export interface GeneratedWebsite {
  html: string
  model: string
  inputTokens: number
  outputTokens: number
}

export async function generateWebsite(
  businessName: string,
  category: string,
  city: string,
  scrape: ScrapedContent
): Promise<GeneratedWebsite> {
  const systemPrompt = `You are an elite web designer who creates stunning, conversion-optimized websites for local businesses.
You produce complete, self-contained single-file HTML with embedded CSS (using Tailwind CDN) and minimal vanilla JS.
Your designs are:
- Visually stunning with modern aesthetics (gradients, shadows, glassmorphism accents)
- Mobile-first and fully responsive
- Fast-loading (no heavy frameworks, just Tailwind CDN)
- Conversion-focused (clear CTAs, phone number prominent, trust signals)
- Professional and polished — far better than the typical local business website

RULES:
1. Output ONLY the complete HTML document. No explanation, no markdown code blocks.
2. Use Tailwind CSS via CDN: <script src="https://cdn.tailwindcss.com"></script>
3. Include smooth scroll behavior and subtle animations with CSS
4. Make the phone number clickable (tel: link) and prominent in hero AND footer
5. Include sections: Hero, Services, About, Why Choose Us, Testimonials (if available), Contact, Footer
6. Use a cohesive color palette based on the business category
7. Use Google Fonts via CDN for typography
8. Make CTAs say things like "Get a Free Quote", "Call Now", "Schedule Today"
9. The site must look like it cost $5,000+ to build`

  const userPrompt = `Create a complete professional website for this local business:

BUSINESS INFO:
- Name: ${businessName}
- Category: ${category}
- City: ${city}
- Phone: ${scrape.phone || 'Not provided'}
- Email: ${scrape.email || 'Not provided'}
- Address: ${scrape.address || city}

EXISTING WEBSITE CONTENT (reuse and improve this):
- Tagline/Hero: ${scrape.heroText || scrape.h1 || `Professional ${category} in ${city}`}
- About: ${scrape.aboutText || `${businessName} has been serving ${city} with exceptional ${category} services.`}
- Services: ${scrape.services.length > 0 ? scrape.services.join(', ') : `${category} services`}
- Testimonials: ${scrape.testimonials.length > 0 ? scrape.testimonials.slice(0, 3).join(' | ') : 'Excellent service! Highly recommend. - Google Review'}
- Team: ${scrape.teamMembers.map(m => `${m.name} (${m.role})`).join(', ') || 'Experienced professionals'}

DESIGN DIRECTION:
- Primary colors: Use a strong, category-appropriate palette (e.g., deep blue for law, green for landscaping, etc.)
- Style: Modern, clean, high-end local business
- Font: Professional sans-serif (Inter or Plus Jakarta Sans from Google Fonts)

Generate the complete HTML now:`

  const message = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 8192,
    messages: [{ role: 'user', content: userPrompt }],
    system: systemPrompt,
  })

  const rawContent = message.content[0].type === 'text' ? message.content[0].text : ''

  // Strip any accidental markdown code fences
  const html = rawContent
    .replace(/^```html\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim()

  return {
    html,
    model: message.model,
    inputTokens: message.usage.input_tokens,
    outputTokens: message.usage.output_tokens,
  }
}
