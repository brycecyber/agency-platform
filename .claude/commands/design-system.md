# Design System — Website Generation Reference

This file contains all design patterns, color systems, typography, and component code
pulled from the best open-source libraries on GitHub. Always reference this when generating websites.

## Core Libraries Used

- **Tailwind CSS** (via CDN — no install needed) — utility-first CSS
- **HyperUI** (github.com/markmead/hyperui) — 226 free Tailwind components, best for local biz sites
- **daisyUI** (github.com/saadeghi/daisyui) — 63 components, 35 themes, zero JS
- **Flowbite** (github.com/themesberg/flowbite) — 400+ interactive components
- **Google Fonts** (via CDN) — premium typography, always free

## HTML Template Shell

Every generated site must use this shell:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="[META DESCRIPTION]" />
  <title>[BUSINESS NAME] | [CITY] [NICHE]</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '[PRIMARY_HEX]',
            secondary: '[SECONDARY_HEX]',
            accent: '[ACCENT_HEX]',
          },
          fontFamily: {
            heading: ['[HEADING_FONT]', 'serif'],
            body: ['[BODY_FONT]', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="[GOOGLE_FONTS_URL]" rel="stylesheet">

  <!-- Smooth scroll -->
  <style>
    html { scroll-behavior: smooth; }
    .font-heading { font-family: '[HEADING_FONT]', serif; }
    .font-body { font-family: '[BODY_FONT]', sans-serif; }
    /* Fade-in animation */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.6s ease forwards; }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
  </style>
</head>
<body class="font-body antialiased">
  <!-- NAV -->
  <!-- HERO -->
  <!-- SERVICES -->
  <!-- ABOUT -->
  <!-- WHY US -->
  <!-- TESTIMONIALS -->
  <!-- CTA BANNER -->
  <!-- CONTACT -->
  <!-- FOOTER -->

  <!-- Mobile menu script -->
  <script>
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));
  </script>
</body>
</html>
```

---

## Color Palettes by Niche

### Law Firms / Attorneys
```
Primary:   #1e3a8a  (Tailwind: blue-900)
Secondary: #0c2340  (custom dark navy)
Accent:    #d4af37  (gold)
BG:        #f9fafb  (gray-50)
Text:      #1f2937  (gray-800)
Heading Font: Playfair Display (serif, prestigious)
Body Font:    Source Sans Pro
Google Fonts URL: https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+3:wght@400;600&display=swap
```

### Plumbers / HVAC / Heating & Cooling
```
Primary:   #1d4ed8  (blue-700)
Secondary: #1e3a8a  (blue-900)
Accent:    #ea580c  (orange-600)
BG:        #ffffff
Text:      #1f2937
Heading Font: Inter (bold, strong)
Body Font:    Inter
Google Fonts URL: https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap
```

### Electricians / Contractors
```
Primary:   #b91c1c  (red-700)
Secondary: #1f2937  (gray-800)
Accent:    #eab308  (yellow-500)
BG:        #f3f4f6  (gray-100)
Text:      #111827
Heading Font: Raleway (bold, geometric)
Body Font:    Open Sans
Google Fonts URL: https://fonts.googleapis.com/css2?family=Raleway:wght@700;800&family=Open+Sans:wght@400;600&display=swap
```

### Roofers / General Contractors
```
Primary:   #92400e  (amber-800, earthy authority)
Secondary: #1c1917  (stone-900)
Accent:    #f59e0b  (amber-400)
BG:        #fafaf9  (stone-50)
Text:      #1c1917
Heading Font: Oswald (strong, industrial)
Body Font:    Lato
Google Fonts URL: https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Lato:wght@400;700&display=swap
```

### Landscaping / Lawn Care / Pest Control
```
Primary:   #15803d  (green-700)
Secondary: #166534  (green-800)
Accent:    #84cc16  (lime-500)
BG:        #f0fdf4  (green-50)
Text:      #14532d
Heading Font: Montserrat (friendly, outdoorsy)
Body Font:    Nunito
Google Fonts URL: https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Nunito:wght@400;600&display=swap
```

### Dentists / Chiropractors / Healthcare
```
Primary:   #0891b2  (cyan-600)
Secondary: #0e7490  (cyan-700)
Accent:    #06b6d4  (cyan-500)
BG:        #f0f9ff  (sky-50)
Text:      #0c4a6e
Heading Font: Plus Jakarta Sans (clean, medical)
Body Font:    Plus Jakarta Sans
Google Fonts URL: https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap
```

### Auto Repair / Mechanics
```
Primary:   #374151  (gray-700)
Secondary: #111827  (gray-900)
Accent:    #f97316  (orange-500)
BG:        #f9fafb
Text:      #111827
Heading Font: Barlow Condensed (tough, mechanical)
Body Font:    Barlow
Google Fonts URL: https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500&display=swap
```

### Real Estate / Insurance / Accountants
```
Primary:   #4338ca  (indigo-700)
Secondary: #312e81  (indigo-900)
Accent:    #a78bfa  (violet-400)
BG:        #faf5ff  (purple-50)
Text:      #1e1b4b
Heading Font: DM Serif Display (elegant)
Body Font:    DM Sans
Google Fonts URL: https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap
```

---

## Section Components

### Sticky Navigation
```html
<nav class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2">
        <span class="text-xl font-bold font-heading text-primary">[BUSINESS NAME]</span>
      </a>
      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#services" class="text-gray-600 hover:text-primary font-medium transition-colors">Services</a>
        <a href="#about" class="text-gray-600 hover:text-primary font-medium transition-colors">About</a>
        <a href="#testimonials" class="text-gray-600 hover:text-primary font-medium transition-colors">Reviews</a>
        <a href="#contact" class="text-gray-600 hover:text-primary font-medium transition-colors">Contact</a>
        <a href="tel:[PHONE]" class="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm">
          Call Now: [PHONE]
        </a>
      </div>
      <!-- Mobile hamburger -->
      <button id="menu-btn" class="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>
  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
    <a href="#services" class="block text-gray-700 font-medium py-2">Services</a>
    <a href="#about" class="block text-gray-700 font-medium py-2">About</a>
    <a href="#testimonials" class="block text-gray-700 font-medium py-2">Reviews</a>
    <a href="#contact" class="block text-gray-700 font-medium py-2">Contact</a>
    <a href="tel:[PHONE]" class="block w-full text-center px-4 py-3 bg-primary text-white rounded-lg font-semibold">Call: [PHONE]</a>
  </div>
</nav>
```

### Hero Section (Gradient + Trust Badges)
```html
<section class="min-h-screen flex items-center bg-gradient-to-br from-primary via-primary/90 to-secondary pt-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
    <div class="fade-up">
      <!-- Trust Badge -->
      <div class="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
        <span class="text-yellow-400">★★★★★</span>
        <span>Rated #1 [NICHE] in [CITY]</span>
      </div>
      <!-- Headline -->
      <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
        [HERO HEADLINE]<br>
        <span class="text-accent">[CITY]</span>
      </h1>
      <!-- Subhead -->
      <p class="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
        [HERO SUBTEXT]
      </p>
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="tel:[PHONE]" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-xl text-lg hover:opacity-90 transition-all shadow-lg shadow-accent/30">
          📞 Call [PHONE]
        </a>
        <a href="#contact" class="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl text-lg hover:bg-white/20 transition-all border border-white/30">
          Get Free Quote
        </a>
      </div>
      <!-- Trust signals row -->
      <div class="flex flex-wrap gap-6 mt-10">
        <div class="flex items-center gap-2 text-white/70">
          <span class="text-2xl">🏆</span><span class="text-sm font-medium">Licensed & Insured</span>
        </div>
        <div class="flex items-center gap-2 text-white/70">
          <span class="text-2xl">⚡</span><span class="text-sm font-medium">Same-Day Service</span>
        </div>
        <div class="flex items-center gap-2 text-white/70">
          <span class="text-2xl">💯</span><span class="text-sm font-medium">Satisfaction Guaranteed</span>
        </div>
      </div>
    </div>
    <!-- Hero image side -->
    <div class="hidden lg:block fade-up delay-2">
      <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-white/10">
        <img src="[HERO_IMAGE_OR_PLACEHOLDER]" alt="[BUSINESS NAME] team at work" class="w-full h-full object-cover"/>
      </div>
    </div>
  </div>
</section>
```

### Services Grid
```html
<section id="services" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-14">
      <h2 class="font-heading text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
      <p class="text-lg text-gray-500 max-w-2xl mx-auto">Comprehensive [NICHE] solutions for [CITY] homeowners and businesses</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Service Card — repeat per service -->
      <div class="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <span class="text-2xl">[ICON_EMOJI]</span>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">[SERVICE NAME]</h3>
        <p class="text-gray-500 leading-relaxed">[SERVICE DESCRIPTION]</p>
        <div class="mt-6 text-primary font-semibold text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
          Learn more <span>→</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Testimonials (Star ratings + Photos)
```html
<section id="testimonials" class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-14">
      <h2 class="font-heading text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
      <p class="text-gray-500">Trusted by hundreds of [CITY] homeowners</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Testimonial Card -->
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div class="flex text-yellow-400 text-xl mb-4">★★★★★</div>
        <p class="text-gray-700 leading-relaxed mb-6 italic">"[TESTIMONIAL TEXT]"</p>
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
            [INITIAL]
          </div>
          <div>
            <p class="font-semibold text-gray-900">[NAME]</p>
            <p class="text-sm text-gray-500">[CITY] Resident</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### CTA Banner
```html
<section class="py-20 bg-gradient-to-r from-primary to-secondary">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
    <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
      Ready to Get Started?
    </h2>
    <p class="text-xl text-white/80 mb-10">
      Call us today for a free estimate. Available [HOURS].
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="tel:[PHONE]" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary font-bold rounded-xl text-xl hover:bg-gray-50 transition-all shadow-xl">
        📞 [PHONE]
      </a>
      <a href="#contact" class="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold rounded-xl text-xl hover:bg-white/10 transition-all">
        Get Free Quote
      </a>
    </div>
  </div>
</section>
```

### Contact Section
```html
<section id="contact" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
    <!-- Contact Info -->
    <div>
      <h2 class="font-heading text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
      <p class="text-gray-500 mb-10">We're here when you need us. Contact us today for fast, professional service.</p>
      <div class="space-y-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">📞</div>
          <div>
            <p class="font-semibold text-gray-900">Phone</p>
            <a href="tel:[PHONE]" class="text-primary hover:underline text-lg font-medium">[PHONE]</a>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">📧</div>
          <div>
            <p class="font-semibold text-gray-900">Email</p>
            <a href="mailto:[EMAIL]" class="text-primary hover:underline">[EMAIL]</a>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">📍</div>
          <div>
            <p class="font-semibold text-gray-900">Service Area</p>
            <p class="text-gray-600">[CITY] and surrounding areas</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">🕐</div>
          <div>
            <p class="font-semibold text-gray-900">Hours</p>
            <p class="text-gray-600">[HOURS]</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Form -->
    <div class="bg-gray-50 rounded-2xl p-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
      <form class="space-y-5" onsubmit="event.preventDefault(); alert('Thanks! We\'ll be in touch within 24 hours.')">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input type="text" required placeholder="John"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input type="text" required placeholder="Smith"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input type="tel" required placeholder="(555) 000-0000"
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
          <input type="text" placeholder="Describe your project..."
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
          <textarea rows="3" placeholder="Additional details..."
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white resize-none"></textarea>
        </div>
        <button type="submit"
          class="w-full py-4 bg-primary text-white font-bold rounded-xl text-lg hover:opacity-90 transition-all shadow-lg">
          Send Request →
        </button>
        <p class="text-xs text-center text-gray-400">We'll respond within 24 hours. No spam, ever.</p>
      </form>
    </div>
  </div>
</section>
```

### Footer
```html
<footer class="bg-gray-900 text-white py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      <div>
        <h3 class="font-heading text-xl font-bold mb-4">[BUSINESS NAME]</h3>
        <p class="text-gray-400 text-sm leading-relaxed">[TAGLINE OR SHORT DESCRIPTION]</p>
      </div>
      <div>
        <h4 class="font-semibold mb-4">Quick Links</h4>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="#services" class="hover:text-white transition-colors">Services</a></li>
          <li><a href="#about" class="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#testimonials" class="hover:text-white transition-colors">Reviews</a></li>
          <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-4">Contact</h4>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="tel:[PHONE]" class="hover:text-white transition-colors">📞 [PHONE]</a></li>
          <li><a href="mailto:[EMAIL]" class="hover:text-white transition-colors">📧 [EMAIL]</a></li>
          <li>📍 [CITY], [STATE]</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
      © 2025 [BUSINESS NAME]. All rights reserved. | Serving [CITY] and surrounding areas.
    </div>
  </div>
</footer>
```

---

## Design Rules — Always Follow These

1. Phone number must appear in: NAV, HERO (as primary CTA), CTA BANNER, CONTACT section, FOOTER
2. Every page must have EXACTLY ONE primary color CTA above the fold
3. Use `hover:-translate-y-1 transition-all duration-300` on service cards for interactivity
4. Use `scroll-behavior: smooth` always
5. Mobile hamburger menu is required
6. Google Fonts loaded via preconnect for performance
7. All images use `object-cover` to prevent distortion
8. Use emoji as decorative icons — they load faster than icon fonts
9. Form submit shows an alert (since there's no backend) — "Thanks! We'll be in touch within 24 hours."
10. All external links use `target="_blank" rel="noopener"`
