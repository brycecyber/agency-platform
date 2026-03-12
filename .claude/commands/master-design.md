# MASTER DESIGN SYSTEM — World-Class Website Generation
# Compiled from: HyperUI, daisyUI, Flowbite, shadcn/ui, Tailwind UI, Awwwards research,
# Google Fonts, premium brand color strategies (Stripe, Linear, Vercel, Apple, Figma)
#
# This is the single source of truth for generating websites that look like they cost $10,000+

---

## THE NON-NEGOTIABLE RULES

1. Phone number appears in: NAV + HERO + CTA BANNER + FOOTER (minimum 4 times)
2. Above the fold MUST have: headline, subtext, primary CTA, phone number, 1 trust signal
3. Every button has a hover state
4. Every page is fully mobile responsive
5. Smooth scroll is always enabled
6. Form submit always shows a thank-you alert (no backend needed)
7. Google Fonts loaded with preconnect for performance
8. No placeholder brackets [LIKE THIS] in final output — EVER
9. All images use object-cover
10. Mobile hamburger menu is required and functional

---

## TYPOGRAPHY SYSTEM

### The Best Google Font Pairings (by business type)

**Law / Finance / Real Estate / Insurance (Authority + Trust)**
```
Heading: Playfair Display (serif, dramatic, prestigious)
Body: Source Sans 3 (clean, readable)
URL: https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@400;500;600&display=swap
CSS: font-family: 'Playfair Display', serif;
```

**Plumbing / HVAC / Electrical / Roofing (Strong + Reliable)**
```
Heading: Inter (geometric, strong, modern)
Body: Inter
URL: https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap
Variation: Raleway 700/800 for headings if more personality needed
```

**Medical / Dental / Chiropractic (Clean + Trustworthy)**
```
Heading: Plus Jakarta Sans (modern, clean, medical)
Body: Plus Jakarta Sans
URL: https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap
```

**Landscaping / Pest Control / Outdoor (Friendly + Natural)**
```
Heading: Montserrat (bold, outdoorsy, approachable)
Body: Nunito (friendly, rounded)
URL: https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Nunito:wght@400;500;600&display=swap
```

**Auto Repair / Contractors (Tough + Dependable)**
```
Heading: Oswald (condensed, powerful, industrial)
Body: Open Sans (readable, trustworthy)
URL: https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Open+Sans:wght@400;500;600&display=swap
```

**Premium / Luxury / Boutique (Any niche going upscale)**
```
Heading: Cormorant Garamond (ultra-elegant, luxury)
Body: DM Sans (modern contrast)
URL: https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap
```

### Type Scale System (1.333 ratio — Golden ratio adjacent)
```
xs:   0.75rem  (12px)  — Labels, captions
sm:   0.875rem (14px)  — Small body
base: 1rem     (16px)  — Body text
lg:   1.125rem (18px)  — Large body
xl:   1.333rem (21px)  — Lead text
2xl:  1.777rem (28px)  — Small heading
3xl:  2.369rem (38px)  — Section heading
4xl:  3.157rem (50px)  — Hero subheading
5xl:  4.209rem (67px)  — Hero heading
```

### Responsive Typography (clamp — scales with viewport)
```css
h1 { font-size: clamp(2.5rem, 5vw, 4.5rem); }
h2 { font-size: clamp(2rem, 4vw, 3rem); }
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }
p  { font-size: clamp(1rem, 1.5vw, 1.125rem); }
```

### Line Height Rules
```
Headings (display):  line-height: 1.1  (tight, confident)
Subheadings:         line-height: 1.25
Body text:           line-height: 1.65 (open, readable)
Small text:          line-height: 1.5
```

### Letter Spacing Rules
```
Large headings (60px+): letter-spacing: -0.03em (tighten)
Medium headings:        letter-spacing: -0.02em
Body:                   letter-spacing: 0
ALL CAPS labels:        letter-spacing: 0.08em (open up)
Buttons:                letter-spacing: 0.01em
```

---

## COLOR SYSTEM

### 60-30-10 Rule
```
60% = Background / neutral (white, gray-50, stone-50)
30% = Primary brand color (main sections, headings)
10% = Accent / CTA color (buttons, highlights, links)
```

### Master Color Palettes by Niche

**Law Firms — "Dark Authority"**
```
Primary:    #1e3a8a  (blue-900)
Secondary:  #0c1f4a  (deeper navy)
Accent:     #d4af37  (gold — prestige)
Surface:    #f9fafb  (gray-50)
Text:       #1f2937  (gray-800)
Gradient:   linear-gradient(135deg, #1e3a8a 0%, #0c1f4a 100%)
```

**Plumbers — "Trusted Blue"**
```
Primary:    #1d4ed8  (blue-700)
Secondary:  #1e3a8a  (blue-900)
Accent:     #ea580c  (orange-600 — urgency, action)
Surface:    #f8fafc
Text:       #0f172a
Gradient:   linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)
```

**HVAC — "Command Red"**
```
Primary:    #b91c1c  (red-700)
Secondary:  #7f1d1d  (red-900)
Accent:     #f59e0b  (amber-400 — warmth)
Surface:    #fafafa
Text:       #1c1917
Gradient:   linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)
```

**Electricians — "Power"**
```
Primary:    #1f2937  (gray-800)
Secondary:  #111827  (gray-900)
Accent:     #eab308  (yellow-500 — electric)
Surface:    #f9fafb
Text:       #111827
Gradient:   linear-gradient(135deg, #374151 0%, #111827 100%)
```

**Roofers / General Contractors — "Rugged Earth"**
```
Primary:    #92400e  (amber-800)
Secondary:  #1c1917  (stone-900)
Accent:     #f59e0b  (amber-400)
Surface:    #fafaf9  (stone-50)
Text:       #1c1917
Gradient:   linear-gradient(135deg, #92400e 0%, #78350f 100%)
```

**Landscaping / Lawn Care — "Fresh Growth"**
```
Primary:    #15803d  (green-700)
Secondary:  #14532d  (green-900)
Accent:     #84cc16  (lime-500 — vibrancy)
Surface:    #f0fdf4  (green-50)
Text:       #14532d
Gradient:   linear-gradient(135deg, #15803d 0%, #14532d 100%)
```

**Pest Control — "Precision"**
```
Primary:    #166534  (green-800)
Secondary:  #14532d  (green-900)
Accent:     #dc2626  (red-600 — danger/elimination)
Surface:    #f9fafb
Text:       #1f2937
Gradient:   linear-gradient(135deg, #166534 0%, #14532d 100%)
```

**Dentists — "Clinical Clean"**
```
Primary:    #0891b2  (cyan-600)
Secondary:  #0c4a6e  (sky-900)
Accent:     #06b6d4  (cyan-400)
Surface:    #f0f9ff  (sky-50)
Text:       #0c4a6e
Gradient:   linear-gradient(135deg, #0891b2 0%, #0e7490 100%)
```

**Chiropractors / Physical Therapy — "Healing"**
```
Primary:    #0d9488  (teal-600)
Secondary:  #134e4a  (teal-900)
Accent:     #34d399  (emerald-400)
Surface:    #f0fdfa
Text:       #134e4a
Gradient:   linear-gradient(135deg, #0d9488 0%, #0f766e 100%)
```

**Auto Repair — "Industrial Strength"**
```
Primary:    #374151  (gray-700)
Secondary:  #111827  (gray-900)
Accent:     #f97316  (orange-500)
Surface:    #f9fafb
Text:       #111827
Gradient:   linear-gradient(135deg, #374151 0%, #1f2937 100%)
```

**Real Estate — "Premium Property"**
```
Primary:    #4338ca  (indigo-700)
Secondary:  #312e81  (indigo-900)
Accent:     #f59e0b  (amber-400 — gold)
Surface:    #faf5ff
Text:       #1e1b4b
Gradient:   linear-gradient(135deg, #4338ca 0%, #3730a3 100%)
```

**Insurance / Accountants / CPAs — "Dependable"**
```
Primary:    #1e40af  (blue-800)
Secondary:  #1e3a8a  (blue-900)
Accent:     #10b981  (emerald-500 — money/growth)
Surface:    #eff6ff
Text:       #1e3a8a
Gradient:   linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)
```

**Veterinarians — "Caring"**
```
Primary:    #7c3aed  (violet-600)
Secondary:  #5b21b6  (violet-800)
Accent:     #34d399  (emerald-400 — life/health)
Surface:    #faf5ff
Text:       #3b0764
Gradient:   linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)
```

### Premium Gradient Library
```css
/* Stripe-inspired */
.grad-stripe    { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }

/* Ocean */
.grad-ocean     { background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); }

/* Sunset */
.grad-sunset    { background: linear-gradient(135deg, #f97316 0%, #ec4899 100%); }

/* Forest */
.grad-forest    { background: linear-gradient(135deg, #059669 0%, #0d9488 100%); }

/* Midnight */
.grad-midnight  { background: linear-gradient(135deg, #1e3a8a 0%, #312e81 100%); }

/* Golden hour */
.grad-golden    { background: linear-gradient(135deg, #d97706 0%, #92400e 100%); }

/* Mesh gradient (CSS-only) */
.grad-mesh {
  background-color: #4338ca;
  background-image:
    radial-gradient(at 40% 20%, hsla(228,100%,74%,0.8) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189,100%,56%,0.6) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355,100%,93%,0.5) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340,100%,76%,0.5) 0px, transparent 50%);
}
```

---

## ADVANCED CSS EFFECTS

### Glassmorphism Card
```html
<div style="
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 2rem;
">
  Glassmorphism content
</div>
```

### Colored Shadow (makes CTAs pop)
```css
/* Blue shadow */
.btn-glow-blue {
  box-shadow: 0 8px 30px rgba(29, 78, 216, 0.4);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.btn-glow-blue:hover {
  box-shadow: 0 12px 40px rgba(29, 78, 216, 0.6);
  transform: translateY(-2px);
}

/* Orange/accent shadow */
.btn-glow-accent {
  box-shadow: 0 8px 30px rgba(234, 88, 12, 0.4);
}
```

### Shimmer Button Effect
```html
<style>
.shimmer {
  position: relative;
  overflow: hidden;
}
.shimmer::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -75%;
  width: 50%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.3) 50%,
    rgba(255,255,255,0) 100%
  );
  transform: skewX(-25deg);
  animation: shimmer 2.5s infinite;
}
@keyframes shimmer {
  0% { left: -75%; }
  100% { left: 125%; }
}
</style>
<button class="shimmer px-8 py-4 bg-blue-600 text-white font-bold rounded-xl">
  Call Now
</button>
```

### Scroll-Triggered Fade-In (Intersection Observer)
```html
<style>
.fade-in-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
</script>

<!-- Usage: add class="fade-in-section" to any section -->
```

### Animated Counter (numbers count up)
```html
<script>
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target.toLocaleString() + (el.getAttribute('data-suffix') || '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString() + (el.getAttribute('data-suffix') || '');
    }
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
</script>

<!-- Usage -->
<span data-target="500" data-suffix="+">0</span> Happy Customers
<span data-target="15" data-suffix=" Years">0</span> Experience
<span data-target="24" data-suffix="/7">0</span> Support
```

### FAQ Accordion
```html
<div class="space-y-3" id="faq">
  <!-- FAQ Item — repeat this block -->
  <div class="border border-gray-200 rounded-xl overflow-hidden">
    <button onclick="toggleFaq(this)"
      class="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
      <span>Do you offer free estimates?</span>
      <svg class="w-5 h-5 text-gray-500 transition-transform duration-300 faq-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div class="faq-answer hidden px-6 pb-5 text-gray-600 leading-relaxed">
      Yes! We offer completely free, no-obligation estimates for all jobs. Call us or fill out the form and we'll get back to you within 24 hours.
    </div>
  </div>
</div>

<script>
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  const isOpen = !answer.classList.contains('hidden');
  // Close all
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
  document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = '');
  // Open clicked if it was closed
  if (!isOpen) {
    answer.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  }
}
</script>
```

### Sticky Header with Scroll Color Change
```html
<style>
#navbar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
#navbar.scrolled {
  background-color: white !important;
  box-shadow: 0 1px 20px rgba(0,0,0,0.1);
}
</style>
<script>
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});
</script>
```

### Before/After Slider
```html
<div class="relative w-full aspect-video rounded-2xl overflow-hidden select-none" id="slider-container">
  <!-- Before image -->
  <img src="before.jpg" alt="Before" class="absolute inset-0 w-full h-full object-cover">
  <!-- After image (clipped) -->
  <div class="absolute inset-0 overflow-hidden" id="after-clip" style="width: 50%">
    <img src="after.jpg" alt="After" class="absolute inset-0 w-full h-full object-cover" style="min-width: 200%">
  </div>
  <!-- Divider line -->
  <div class="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg cursor-ew-resize" id="divider" style="left: 50%">
    <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
      ↔
    </div>
  </div>
  <div class="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">BEFORE</div>
  <div class="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">AFTER</div>
</div>
<script>
const container = document.getElementById('slider-container');
const afterClip = document.getElementById('after-clip');
const divider = document.getElementById('divider');
let dragging = false;
divider.addEventListener('mousedown', () => dragging = true);
document.addEventListener('mouseup', () => dragging = false);
document.addEventListener('mousemove', e => {
  if (!dragging) return;
  const rect = container.getBoundingClientRect();
  const pct = Math.min(Math.max((e.clientX - rect.left) / rect.width * 100, 0), 100);
  afterClip.style.width = pct + '%';
  divider.style.left = pct + '%';
});
</script>
```

### Bento Grid Layout (2024 trend)
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
  <!-- Large card — spans 2 cols, 2 rows -->
  <div class="md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 flex flex-col justify-between">
    <div class="text-4xl">🏆</div>
    <div>
      <h3 class="text-2xl font-bold text-white mb-2">15+ Years Experience</h3>
      <p class="text-white/70">Serving [City] families since 2009</p>
    </div>
  </div>
  <!-- Stat card -->
  <div class="bg-accent rounded-3xl p-6 flex flex-col justify-between">
    <div class="text-3xl">⭐</div>
    <div>
      <div class="text-4xl font-black text-white">500+</div>
      <div class="text-white/80 text-sm">5-Star Reviews</div>
    </div>
  </div>
  <!-- Stat card -->
  <div class="bg-gray-900 rounded-3xl p-6 flex flex-col justify-between">
    <div class="text-3xl">⚡</div>
    <div>
      <div class="text-4xl font-black text-white">24/7</div>
      <div class="text-gray-400 text-sm">Emergency Service</div>
    </div>
  </div>
  <!-- Wide card -->
  <div class="md:col-span-3 bg-primary/10 border border-primary/20 rounded-3xl p-6 flex items-center justify-between">
    <div>
      <h3 class="font-bold text-gray-900 text-xl">Ready to get started?</h3>
      <p class="text-gray-600">Free estimates, no obligation</p>
    </div>
    <a href="tel:[PHONE]" class="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
      Call Now
    </a>
  </div>
</div>
```

---

## CONVERSION OPTIMIZATION RULES

### Above the Fold (Must be visible without scrolling)
1. Logo / Business name
2. Navigation with phone number
3. H1 headline (what you do + where)
4. Subtext (key benefit or proof)
5. PRIMARY CTA button (Call Now or Get Free Quote)
6. At least ONE trust signal (years in business, rating, "Licensed & Insured")

### Trust Signals That Convert (in order of effectiveness)
1. **Google star rating + review count** — "4.9 ⭐ (312 Google Reviews)"
2. **Years in business** — "Serving [City] since 2008"
3. **Licensed & Insured badge**
4. **BBB Accredited** (if applicable)
5. **Response time guarantee** — "We respond within 2 hours"
6. **Money-back / satisfaction guarantee**
7. **Photo of real team** (NOT stock photos — huge trust killer if discovered)
8. **Awards or certifications** (if any)

### CTA Psychology Rules
- Use ACTION verbs: "Get", "Call", "Schedule", "Request", "Claim"
- Add specificity: "Get My Free Quote" not just "Submit"
- Add urgency when true: "Available Today" or "Same-Day Service"
- Primary CTA color = HIGH CONTRAST to background (never blend in)
- Secondary CTA = outline/ghost button style
- CTA button minimum size: 48px height on mobile (thumb target)

### Form Optimization
- **3-5 fields maximum** for quote forms
- **Required fields only:** Name, Phone, Service Type, Message
- **Submit button text:** "Send My Request →" or "Get My Free Quote →"
- **Below form:** "We'll call you back within 24 hours. No spam."
- **Phone field:** Use `type="tel"` for mobile keyboard

### Mobile Rules (60%+ of local business traffic is mobile)
- Minimum font size: 16px (prevents iOS auto-zoom on inputs)
- Tap targets minimum 48x48px
- Phone number is ALWAYS a `tel:` link
- Hamburger menu always works
- Hero text readable without zooming
- Form usable with thumbs (not too wide, not too small)

---

## SECTION TEMPLATES (COMPLETE)

### Stats Bar (below hero, above services)
```html
<section class="py-12 bg-gray-900 border-y border-gray-800">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl md:text-5xl font-black text-white mb-1" data-target="500" data-suffix="+">0</div>
        <div class="text-gray-400 text-sm">Happy Customers</div>
      </div>
      <div>
        <div class="text-4xl md:text-5xl font-black text-white mb-1" data-target="15" data-suffix=" Yrs">0</div>
        <div class="text-gray-400 text-sm">In Business</div>
      </div>
      <div>
        <div class="text-4xl md:text-5xl font-black text-white mb-1" data-target="24" data-suffix="/7">0</div>
        <div class="text-gray-400 text-sm">Emergency Service</div>
      </div>
      <div>
        <div class="text-4xl md:text-5xl font-black text-accent mb-1">4.9 ⭐</div>
        <div class="text-gray-400 text-sm">Google Rating</div>
      </div>
    </div>
  </div>
</section>
```

### Why Choose Us (4-grid with emojis)
```html
<section class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-14">
      <h2 class="font-heading text-4xl font-bold text-gray-900 mb-4">Why [City] Trusts Us</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="text-center p-6">
        <div class="text-5xl mb-4">🛡️</div>
        <h3 class="font-bold text-gray-900 mb-2 text-lg">Licensed & Insured</h3>
        <p class="text-gray-500 text-sm">Fully licensed and insured for your peace of mind</p>
      </div>
      <div class="text-center p-6">
        <div class="text-5xl mb-4">⚡</div>
        <h3 class="font-bold text-gray-900 mb-2 text-lg">Fast Response</h3>
        <p class="text-gray-500 text-sm">Same-day service available for emergencies</p>
      </div>
      <div class="text-center p-6">
        <div class="text-5xl mb-4">💰</div>
        <h3 class="font-bold text-gray-900 mb-2 text-lg">Upfront Pricing</h3>
        <p class="text-gray-500 text-sm">No hidden fees. You know the price before we start</p>
      </div>
      <div class="text-center p-6">
        <div class="text-5xl mb-4">✅</div>
        <h3 class="font-bold text-gray-900 mb-2 text-lg">Satisfaction Guaranteed</h3>
        <p class="text-gray-500 text-sm">Not happy? We'll make it right. Every time.</p>
      </div>
    </div>
  </div>
</section>
```

### Service Area Map Section
```html
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <h2 class="font-heading text-4xl font-bold text-gray-900 mb-6">We Serve [City] & Surrounding Areas</h2>
      <p class="text-gray-500 mb-8">Our team covers [City] and all nearby communities. Not sure if we serve your area? Give us a call — we'll let you know in seconds.</p>
      <div class="grid grid-cols-2 gap-3">
        <!-- List nearby cities/neighborhoods -->
        <div class="flex items-center gap-2 text-gray-700">
          <span class="text-green-500">✓</span> [City] (Primary)
        </div>
        <div class="flex items-center gap-2 text-gray-700">
          <span class="text-green-500">✓</span> [Nearby City 1]
        </div>
        <div class="flex items-center gap-2 text-gray-700">
          <span class="text-green-500">✓</span> [Nearby City 2]
        </div>
        <div class="flex items-center gap-2 text-gray-700">
          <span class="text-green-500">✓</span> [Nearby City 3]
        </div>
      </div>
      <a href="tel:[PHONE]" class="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity">
        📞 Check Your Area
      </a>
    </div>
    <!-- Embedded Google Map -->
    <div class="rounded-2xl overflow-hidden shadow-xl h-80">
      <iframe
        src="https://maps.google.com/maps?q=[CITY]+[STATE]&output=embed"
        width="100%" height="100%" frameborder="0"
        style="border:0" allowfullscreen loading="lazy">
      </iframe>
    </div>
  </div>
</section>
```

### Google Reviews Badge
```html
<!-- Floating Google review badge -->
<div class="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-3 shadow-md">
  <svg class="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
  <div>
    <div class="flex text-yellow-400 text-sm">★★★★★</div>
    <div class="text-xs text-gray-600 font-medium">4.9 · 200+ Google Reviews</div>
  </div>
</div>
```

---

## SVG BACKGROUNDS & DIVIDERS

### Wave Divider Between Sections
```html
<!-- White to gray transition -->
<div class="overflow-hidden bg-white">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="w-full h-20 fill-gray-50">
    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"/>
  </svg>
</div>

<!-- Gray to primary transition -->
<div class="overflow-hidden bg-gray-50">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="w-full h-20" fill="#1d4ed8">
    <path d="M0,0 C360,80 1080,0 1440,60 L1440,80 L0,80 Z"/>
  </svg>
</div>
```

### Dot Grid Background
```html
<style>
.dot-grid {
  background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px);
  background-size: 24px 24px;
}
</style>
<section class="dot-grid bg-white py-20">...</section>
```

### Diagonal Stripe Background
```html
<style>
.diagonal-stripes {
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 10px,
    rgba(0,0,0,0.03) 10px,
    rgba(0,0,0,0.03) 20px
  );
}
</style>
```

---

## FAQ CONTENT BY NICHE

Use these when building the FAQ section. Pick 6-8 per site. Always include the first 3 for any niche.

### Universal FAQs (use on every site)
1. **Do you offer free estimates?** → Yes, completely free with no obligation. Call or fill out the form.
2. **Are you licensed and insured?** → Yes, fully licensed ([LICENSE #]) and insured for your protection.
3. **What areas do you serve?** → [City] and surrounding areas including [list 4-6 nearby cities].
4. **How quickly can you respond?** → We offer same-day and next-day service for most jobs. Emergency calls answered 24/7.
5. **What payment methods do you accept?** → Cash, all major credit cards, and financing available.
6. **What if I'm not satisfied?** → 100% satisfaction guarantee — we'll make it right or refund you.

### Plumbing-Specific
- "How much does drain cleaning cost?" → Typically $100-$300 depending on the clog. We give you a price before we start.
- "Do you fix water heaters?" → Yes — repair and replacement for all brands and types (tank and tankless).
- "Is there an after-hours emergency fee?" → We're available 24/7. We're honest about emergency rates upfront.
- "How do I know if I have a slab leak?" → Signs include hot floors, sound of running water, or unexplained high water bills. Call us for a free inspection.

### HVAC-Specific
- "How often should I service my AC?" → Once per year minimum — ideally before summer. Saves money and prevents breakdowns.
- "How long do AC units last?" → 15-20 years with proper maintenance. We'll tell you honestly when it's time to replace.
- "Why is my AC blowing warm air?" → Common causes: low refrigerant, dirty filter, or compressor issue. We diagnose free.
- "Do you offer maintenance plans?" → Yes — our annual plans save you money and extend your system's life.

### Roofing-Specific
- "Will my insurance cover roof replacement?" → Possibly — storm damage is usually covered. We help you through the claim process.
- "How long does a roof replacement take?" → Most homes 1-3 days. We protect your property and clean up completely.
- "What type of shingles do you recommend?" → Depends on budget and climate. We'll walk you through options at no charge.
- "What's the difference between repair and replacement?" → We assess your roof honestly and only recommend replacement when necessary.

### Dental-Specific
- "Are you accepting new patients?" → Yes! New patients welcome. Call to schedule your first appointment.
- "Do you accept my insurance?" → We accept most major dental insurance plans. Call us to verify your specific plan.
- "Is dental care painful?" → We use modern techniques and anesthesia to keep you comfortable throughout.
- "How often should I come in for cleanings?" → Every 6 months for most patients. Some conditions require more frequent visits.

### Law Firm (PI)-Specific
- "What does it cost to hire you?" → Nothing upfront. We work on contingency — you only pay if we win.
- "How long does a personal injury case take?" → Varies, but most settle in 6-18 months. We'll give you a realistic timeline.
- "Should I talk to the insurance company?" → No — contact us first. Insurance adjusters work for the insurance company, not you.
- "What is my case worth?" → Depends on injuries, medical bills, lost wages, and impact on your life. Free consultation to assess.

### Auto Repair-Specific
- "Do you give written estimates?" → Always. We get your approval before doing any work.
- "Are your mechanics certified?" → Yes, ASE-certified technicians on staff.
- "Do you offer a warranty on repairs?" → Yes — [X] months / [X] miles on all parts and labor.
- "Can you work on my car's make/model?" → We work on all makes and models, domestic and import.

---

## COMPLETE SECTION ORDER (Every Generated Site)

Always build in this exact order for maximum conversion flow:

```
1.  <head> — meta, schema, Tailwind CDN, fonts, custom CSS
2.  Sticky Nav — logo + links + phone CTA + hamburger
3.  Hero — gradient, headline, CTA buttons, trust badges, Google Reviews badge
4.  Stats Bar — animated counters on dark background
5.  Services — card grid with icons
6.  About — text + stats + team visual + license badge
7.  Why Choose Us — 4-item bento or icon grid
8.  Testimonials — 3 cards with stars and names
9.  Service Area — map embed + nearby city list
10. FAQ — 6-8 questions with smooth accordion
11. CTA Banner — gradient, large phone, get quote
12. Contact — info left + form right
13. Footer — NAP + quick links + service list + copyright
14. Sticky Mobile Call Bar — fixed bottom, mobile only
15. Scripts — menu, reveal observer, counter observer, FAQ, sticky header
```

---

## HTML FILE SAVE PATH

Always save generated websites to:
```
c:/Users/bryce/OneDrive/Desktop/AI Website Builder/generated-sites/[business-name-city].html
```

Example: `smiths-plumbing-austin-tx.html`

## HOW TO SEND TO CLIENT

1. Save the HTML file
2. Go to netlify.com/drop
3. Drag the HTML file onto the page
4. Get a live URL in 10 seconds — free, no account needed
5. Text or email that URL to the client with the pitch

---

## FINAL QUALITY CHECK (Before saving any generated site)

- [ ] No `[PLACEHOLDER]` brackets anywhere in the HTML
- [ ] Phone number is a `tel:` link everywhere it appears
- [ ] Phone appears 4+ times
- [ ] Mobile menu button works
- [ ] All anchor links go to real section IDs
- [ ] Form submit shows a friendly alert message
- [ ] Tailwind CDN script is in `<head>`
- [ ] Google Fonts loaded with preconnect
- [ ] All sections present: Nav, Hero, Stats, Services, About, Why Us, Testimonials, FAQ, CTA, Contact, Footer
- [ ] Smooth scroll enabled
- [ ] Page looks stunning on mobile (mentally simulate 375px width)
- [ ] Gradient matches the niche color palette
- [ ] Fonts match the niche typography recommendation
