/**
 * Website Scraper
 * Uses Playwright (headless Chromium) to fully render pages
 * and extract all content needed for website regeneration.
 */

import { chromium } from 'playwright'

export interface ScrapedContent {
  url: string
  title: string
  metaDescription: string
  h1: string
  heroText: string
  aboutText: string
  services: string[]
  phone: string
  email: string
  address: string
  hours: string
  teamMembers: { name: string; role: string }[]
  testimonials: string[]
  socialLinks: { platform: string; url: string }[]
  logoUrl: string
  imageUrls: string[]
  primaryColor: string
  secondaryColor: string
  fonts: string[]
  rawText: string
  issues: string[]
  score: number
}

export async function scrapeWebsite(url: string): Promise<ScrapedContent> {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 },
  })
  const page = await context.newPage()

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 })
    await page.waitForTimeout(2000)

    const data = await page.evaluate(() => {
      const getText = (sel: string) => document.querySelector(sel)?.textContent?.trim() ?? ''
      const getAttr = (sel: string, attr: string) => (document.querySelector(sel) as HTMLElement | null)?.getAttribute(attr) ?? ''
      const getAllText = (sel: string) => Array.from(document.querySelectorAll(sel)).map(el => el.textContent?.trim() ?? '').filter(Boolean)

      // Colors from CSS
      const bodyStyle = window.getComputedStyle(document.body)
      const primaryColor = bodyStyle.getPropertyValue('--primary') ||
        (document.querySelector('[class*="primary"]') as HTMLElement | null)
          ? window.getComputedStyle(document.querySelector('[class*="primary"]') as Element).backgroundColor
          : bodyStyle.backgroundColor

      // Extract fonts
      const fontFamily = bodyStyle.fontFamily
      const fonts = fontFamily.split(',').map(f => f.trim().replace(/["']/g, '')).filter(Boolean)

      // Find logo
      const logoEl = document.querySelector('header img, .logo img, img[alt*="logo" i], img[src*="logo" i]') as HTMLImageElement | null
      const logoUrl = logoEl?.src ?? ''

      // Images
      const images = Array.from(document.querySelectorAll('img[src]'))
        .map(img => (img as HTMLImageElement).src)
        .filter(src => src && !src.includes('data:') && !src.includes('pixel') && src.length > 10)
        .slice(0, 15)

      // Social links
      const socialPlatforms = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'tiktok', 'yelp']
      const socialLinks = Array.from(document.querySelectorAll('a[href]'))
        .map(a => (a as HTMLAnchorElement).href)
        .filter(href => socialPlatforms.some(p => href.toLowerCase().includes(p)))
        .map(href => {
          const platform = socialPlatforms.find(p => href.toLowerCase().includes(p)) ?? 'other'
          return { platform, url: href }
        })

      // Phone
      const phoneMatch = document.body.innerText.match(/(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/)
      const phone = phoneMatch ? phoneMatch[0] : ''

      // Email
      const emailMatch = document.body.innerText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
      const email = emailMatch ? emailMatch[0] : ''

      // Hours
      const hoursEl = document.querySelector('[class*="hours" i], [id*="hours" i]')
      const hours = hoursEl?.textContent?.trim() ?? ''

      // Services
      const serviceEls = Array.from(document.querySelectorAll('[class*="service" i] h2, [class*="service" i] h3, [class*="service" i] li, [id*="service" i] li'))
      const services = serviceEls.map(el => el.textContent?.trim() ?? '').filter(t => t.length > 2 && t.length < 100).slice(0, 20)

      // Testimonials
      const testimonialEls = Array.from(document.querySelectorAll('[class*="testimonial" i], [class*="review" i], blockquote'))
      const testimonials = testimonialEls.map(el => el.textContent?.trim() ?? '').filter(t => t.length > 20).slice(0, 5)

      // Hero text (first big heading + paragraph)
      const heroText = (getText('h1') + ' ' + getText('.hero p, .hero-text, [class*="hero"] p')).trim()

      // About text
      const aboutText = getText('[class*="about" i] p, [id*="about" i] p, #about, .about-section')

      // Team
      const teamEls = Array.from(document.querySelectorAll('[class*="team" i] [class*="member" i], [class*="staff" i] article'))
      const teamMembers = teamEls.slice(0, 10).map(el => ({
        name: el.querySelector('h3, h4, .name')?.textContent?.trim() ?? '',
        role: el.querySelector('.role, .title, .position, p')?.textContent?.trim() ?? '',
      })).filter(m => m.name)

      return {
        title: getText('title'),
        metaDescription: getAttr('meta[name="description"]', 'content'),
        h1: getText('h1'),
        heroText,
        aboutText,
        services,
        phone,
        email,
        address: getText('[class*="address" i], address'),
        hours,
        teamMembers,
        testimonials,
        socialLinks,
        logoUrl,
        imageUrls: images,
        primaryColor: primaryColor ?? '',
        fonts,
        rawText: document.body.innerText.slice(0, 8000),
      }
    })

    // Detect issues with the current site
    const issues: string[] = []
    if (!data.metaDescription) issues.push('Missing meta description')
    if (!data.phone && !data.email) issues.push('No contact information visible')
    if (data.services.length === 0) issues.push('No services section detected')
    if (data.imageUrls.length < 2) issues.push('Very few images')
    if (!data.logoUrl) issues.push('No logo detected')
    if (data.testimonials.length === 0) issues.push('No testimonials/reviews section')
    if (!data.aboutText) issues.push('No about section')

    // Score (higher = more opportunity to improve)
    const score = issues.length * 10 + (data.testimonials.length === 0 ? 15 : 0)

    return {
      url,
      ...data,
      secondaryColor: '',
      issues,
      score,
    }
  } finally {
    await browser.close()
  }
}
