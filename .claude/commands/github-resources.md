# GITHUB RESOURCES — Master Reference
# Every repo worth knowing for world-class web design
# Star counts verified during research. Use these as inspiration sources.

---

## TIER 1 — ESSENTIAL (Know these cold)

| Repo | Stars | What to use from it |
|------|-------|-------------------|
| tailwindlabs/tailwindcss | 131k+ | The foundation of everything we build |
| shadcn-ui/ui | 85k+ | Best component patterns — composable, accessible, beautiful |
| saadeghi/daisyui | 40k+ | 63 components, 35 themes, zero JS — fast prototyping |
| animate-css/animate.css | 76k+ | CSS animation patterns, prefers-reduced-motion support |
| tailwindlabs/heroicons | 26k+ | MIT-licensed SVG icons — consistent, professional |
| you-dont-need/You-Dont-Need-JavaScript | 20k+ | CSS-only solutions — faster, more accessible |
| ant-design/ant-design | 91k+ | Enterprise UX patterns, information hierarchy |
| mui/material-ui | 92k+ | Shadow/elevation system, motion guidelines |

---

## TIER 2 — HIGH-VALUE REFERENCES

### Animation Libraries
| Repo | What to learn |
|------|--------------|
| greensock/GSAP | ScrollTrigger, timeline animations, fastest JS animator (100% free now) |
| michalsnik/aos | Scroll-triggered fade/slide patterns (Intersection Observer) |
| airbnb/lottie-web | JSON-based animations from After Effects — smooth, scalable |
| mojs/mojs | Burst animations, shape morphing, timeline effects |
| ibelick/motion-primitives | Ready-made animated components |

### Design Systems (Steal patterns from these)
| System | What to steal |
|--------|--------------|
| IBM Carbon | Accessibility-first design, WCAG-compliant color patterns |
| Adobe Spectrum | Design tokens, CSS variable naming conventions |
| Atlassian | Component versioning, React composition patterns |
| GitHub Primer | Clean, developer-focused UI patterns |

### Landing Page Templates
| Repo | Use for |
|------|---------|
| leoMirandaa/shadcn-landing-page | Modern landing page structure |
| ixartz/Next-JS-Landing-Page-Starter-Template | Full-stack starter |
| learning-zone/website-templates | 150+ HTML5 templates for reference |
| dawidolko/Website-Templates | 170+ editable HTML5 templates |

---

## SVG RESOURCES (Use in generated sites)

### Wave Dividers
- **anup-a/svgwave** — Best wave generator, gradient-capable
- **yoksel/wave-maker** — Arc-based waves

### Blob Shapes
- **lokesh-coder/blobshape** — Random organic blob SVGs
- **g-harel/blobs** — Animated blob library

### Pattern Backgrounds
- **iros/patternfills** — SVG pattern collection
- **buseca/patternbolt** — CSS/SCSS pattern backgrounds

### Free Illustrations
- **undraw.co** — 1300+ MIT illustrations, color-customizable
  - Use for: About sections, service icons, empty states

### Ready-to-use SVG Waves for Sites
```html
<!-- Gentle wave — white to gray -->
<svg viewBox="0 0 1440 80" class="w-full block" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"/>
</svg>

<!-- Bold wave — gray to primary -->
<svg viewBox="0 0 1440 100" class="w-full block" fill="#1d4ed8" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,0 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"/>
</svg>

<!-- Diagonal cut -->
<svg viewBox="0 0 1440 60" class="w-full block" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,60 L1440,0 L1440,60 Z"/>
</svg>
```

---

## FORM SUBMISSION SERVICES (For static HTML sites)

Since generated sites have no backend, use one of these for real form submissions:

### Formspree (Best — free tier, easiest setup)
```html
<!-- Replace the onsubmit alert with this for real form submission -->
<form action="https://formspree.io/f/[FORM_ID]" method="POST">
  <input type="hidden" name="_subject" value="New quote request from [BUSINESS NAME] website">
  <!-- ...form fields... -->
  <button type="submit">Get My Free Quote →</button>
</form>
```
- Free tier: 50 submissions/month, no account needed to test
- Get form ID at formspree.io — takes 2 minutes
- Sends email directly to the business owner

### Netlify Forms (if deploying to Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <!-- ...fields... -->
</form>
```
- Free with Netlify (100 submissions/month free tier)
- Zero configuration — just add `data-netlify="true"`

### Default Demo Mode (for client previews before they buy)
```javascript
onsubmit="event.preventDefault(); this.innerHTML='<p class=\'text-green-600 font-bold text-center py-8\'>✓ Thanks! We\'ll call you within 24 hours.</p>'"
```

---

## LOCAL SEO QUICK REFERENCE

### Schema.org Types by Niche
| Niche | @type value |
|-------|------------|
| Plumber | `Plumber` |
| HVAC | `HVACBusiness` |
| Electrician | `Electrician` |
| Roofer | `RoofingContractor` |
| Dentist | `Dentist` |
| Chiropractor / PT | `MedicalClinic` |
| Auto Repair | `AutoRepair` |
| Law Firm | `LegalService` |
| Landscaping | `LandscapingBusiness` |
| Pest Control | `PestControlService` |
| Anything else | `LocalBusiness` |

**Full schema template:** see `generate-website.md`

### Core Web Vitals Targets (Google Ranking Factors)
Our generated sites are built to hit these automatically:
- **LCP:** < 2.5s ✓ (no heavy JS, no render-blocking scripts)
- **CLS:** < 0.1 ✓ (explicit image dimensions)
- **INP:** < 200ms ✓ (vanilla JS only, no frameworks)

---

## AWWWARDS-WINNING DESIGN PRINCIPLES

These are what separates a $200 site from a $10,000 site:

### The 5 Rules of Award-Winning Sites
1. **One Signature Moment** — One powerful effect done perfectly beats 20 mediocre ones
2. **Performance First** — Complex visuals that still load fast (under 3 seconds)
3. **Authentic Content** — Real photos, real copy. No stock. No filler.
4. **Scroll as Narrative** — Content unfolds with purpose as user scrolls
5. **Typography Carries the Design** — When in doubt, make the type bigger and bolder

### Design Trends to Use in 2025
- **Bento grids** — Cards of different sizes in an asymmetric grid (see advanced-effects.md)
- **Glassmorphism on dark backgrounds** — Frosted glass cards
- **Gradient text** — Headline text filled with gradient
- **Animated counters** — Numbers that count up when visible
- **Scroll-triggered reveals** — Elements fade/slide in as user scrolls
- **Large bold typography** — Oversized headlines (clamp 4rem-7rem)
- **Minimal navigation** — Logo + 4-5 links + one CTA button
- **Floating badges** — Pill-shaped trust badges in hero area

### Micro-interactions That Elevate Sites
- Cards lift on hover (`hover:-translate-y-1 hover:shadow-xl transition-all`)
- Buttons have shimmer sweep effect
- Nav links have bottom-border slide animation
- Service icons float gently (`animation: float 3s ease-in-out infinite`)
- CTA button has colored glow shadow
- Phone number pulses subtly to draw attention

---

## CSS TRICKS WORTH KNOWING

### From css-protips (AllThingsSmitty)
```css
/* Perfect aspect ratio for images */
img { aspect-ratio: 16/9; object-fit: cover; }

/* Smooth font rendering on all browsers */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

/* Prevent text from breaking awkwardly */
p { overflow-wrap: break-word; hyphens: auto; }

/* Perfect centering always */
.center { display: grid; place-items: center; }

/* Responsive font size without media queries */
h1 { font-size: clamp(2rem, 5vw, 4.5rem); }

/* Container query-ready max-width */
.container { width: min(90%, 1280px); margin-inline: auto; }
```

### From You-Don't-Need-JavaScript
```css
/* CSS-only smooth scroll */
html { scroll-behavior: smooth; }

/* CSS-only sticky header */
header { position: sticky; top: 0; z-index: 50; }

/* CSS-only mobile menu toggle (checkbox hack) */
/* Better: use our vanilla JS hamburger instead */

/* CSS-only dark mode */
@media (prefers-color-scheme: dark) {
  :root { --bg: #0f172a; --text: #f1f5f9; }
}

/* CSS-only reduce motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## ICON SYSTEM (Heroicons — Use in every site)

### Phone Icon
```html
<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
</svg>
```

### Checkmark (for feature lists)
```html
<svg class="w-5 h-5 text-green-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
</svg>
```

### Star (for ratings)
```html
<svg class="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"/>
</svg>
```

### Map Pin (for location/service area)
```html
<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
</svg>
```

### Clock (for hours)
```html
<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>
```

---

## PERFORMANCE RULES (From enterprise design systems)

Learned from IBM Carbon, Material Design, and Ant Design performance guidelines:

1. **Fonts** — Always use `display=swap` on Google Fonts, always preconnect
2. **Images** — `loading="lazy"` on everything below fold, `loading="eager"` on hero
3. **Animations** — Always add `prefers-reduced-motion` override
4. **CSS** — Tailwind CDN handles this automatically (only loads used classes)
5. **JavaScript** — Keep it minimal, vanilla only (no jQuery, no React, no Vue)
6. **Icons** — Inline SVG > icon fonts > image files (in performance order)
7. **Gradients** — CSS gradients are zero-weight, use liberally

---

## ACCESSIBILITY STANDARDS (IBM Carbon level)

```css
/* Minimum contrast ratios */
/* Normal text: 4.5:1 minimum */
/* Large text (18px+ or 14px+ bold): 3:1 minimum */
/* UI components: 3:1 minimum */

/* Focus indicators — never remove outline */
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary);
  color: white;
  padding: 8px;
  text-decoration: none;
}
.skip-link:focus { top: 0; }
```

```html
<!-- Always include on every site -->
<a href="#main-content" class="skip-link">Skip to main content</a>
<main id="main-content">...</main>

<!-- Images always need alt text -->
<img src="team.jpg" alt="The Smith Plumbing team at a job site in Austin">

<!-- Buttons need accessible labels -->
<button aria-label="Close menu">✕</button>

<!-- Forms need labels -->
<label for="phone">Phone Number</label>
<input id="phone" type="tel" name="phone">
```
