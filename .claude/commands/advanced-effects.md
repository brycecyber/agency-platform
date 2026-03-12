# ADVANCED CSS EFFECTS & ANIMATIONS
# Sources: GitHub repos — tailwindcss-animate, motion-primitives, tailwindcss-motion,
# Aceternity UI, Flowbite, HyperUI, Cruip, official Tailwind UI
# Every pattern here is production-ready. Copy-paste into generated sites.

---

## GLASSMORPHISM

### Standard Glass Card (use on dark/gradient backgrounds)
```html
<div style="
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  padding: 2rem;
">
  Content here
</div>
```

### Glassmorphic Navbar (transparent → frosted on scroll)
```html
<nav id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300">
  <!-- starts transparent, JS adds blur on scroll -->
</nav>
<script>
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(255,255,255,0.95)';
    nav.style.backdropFilter = 'blur(12px)';
    nav.style.boxShadow = '0 1px 20px rgba(0,0,0,0.1)';
  } else {
    nav.style.background = 'transparent';
    nav.style.backdropFilter = 'none';
    nav.style.boxShadow = 'none';
  }
});
</script>
```

---

## SHIMMER BUTTON (CTA attention-grabber)
```html
<style>
.shimmer-btn {
  position: relative;
  overflow: hidden;
}
.shimmer-btn::after {
  content: '';
  position: absolute;
  top: -50%; left: -75%;
  width: 50%; height: 200%;
  background: linear-gradient(to right,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.35) 50%,
    rgba(255,255,255,0) 100%);
  transform: skewX(-25deg);
  animation: shimmer 2.5s infinite;
}
@keyframes shimmer { 0%{left:-75%} 100%{left:125%} }
</style>
<a href="tel:[PHONE]" class="shimmer-btn inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl text-lg">
  📞 Call Now
</a>
```

---

## GRADIENT BORDER BUTTON
```html
<!-- Gradient border with dark fill inside -->
<a href="#contact" class="inline-block rounded-xl p-[2px] bg-gradient-to-r from-cyan-500 via-primary to-accent hover:shadow-xl transition-shadow">
  <span class="block rounded-[10px] bg-gray-900 px-8 py-3 text-white font-bold hover:bg-gray-800 transition">
    Get Free Quote
  </span>
</a>
```

---

## SCROLL-TRIGGERED FADE-IN (Intersection Observer)
```html
<style>
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
</style>
<script>
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
</script>

<!-- Usage: add class="reveal" to any section or element -->
<section class="reveal py-20">...</section>
<div class="reveal reveal-delay-1">Card 1</div>
<div class="reveal reveal-delay-2">Card 2</div>
<div class="reveal reveal-delay-3">Card 3</div>
```

---

## ANIMATED NUMBER COUNTER
```html
<script>
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = prefix + Math.floor(target * eased).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = prefix + target.toLocaleString() + suffix;
  }
  requestAnimationFrame(update);
}
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));
</script>

<!-- Usage -->
<span data-target="500" data-suffix="+" class="text-5xl font-black text-white">0</span>
<span data-target="15" data-suffix=" Yrs" class="text-5xl font-black text-white">0</span>
<span data-target="100" data-prefix="" data-suffix="%" class="text-5xl font-black text-white">0</span>
```

---

## FAQ ACCORDION (Smooth height animation)
```html
<div class="space-y-3">
  <!-- Repeat this block for each FAQ -->
  <div class="border border-gray-200 rounded-xl overflow-hidden">
    <button onclick="toggleFaq(this)"
      class="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors bg-white">
      <span>Do you offer free estimates?</span>
      <svg class="w-5 h-5 text-gray-500 faq-icon transition-transform duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div class="faq-body overflow-hidden transition-all duration-300" style="max-height:0">
      <div class="px-6 pb-5 pt-2 text-gray-600 leading-relaxed">
        Yes! We offer free, no-obligation estimates for all jobs. Call or fill out the form and we'll get back to you within 24 hours.
      </div>
    </div>
  </div>
</div>

<script>
function toggleFaq(btn) {
  const body = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  const isOpen = body.style.maxHeight !== '0px' && body.style.maxHeight !== '';
  // Close all
  document.querySelectorAll('.faq-body').forEach(b => b.style.maxHeight = '0');
  document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = '');
  // Open clicked if was closed
  if (!isOpen) {
    body.style.maxHeight = body.scrollHeight + 'px';
    icon.style.transform = 'rotate(180deg)';
  }
}
</script>
```

---

## FLOATING ANIMATION (for hero badges/icons)
```html
<style>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
.float { animation: float 3s ease-in-out infinite; }
.float-slow { animation: float 5s ease-in-out infinite; }
.float-delay { animation: float 3s ease-in-out 1.5s infinite; }
</style>

<div class="float text-5xl">🏆</div>
<div class="float-slow text-4xl">⭐</div>
```

---

## BLOB ANIMATION (background accent)
```html
<style>
@keyframes blob {
  0%, 100% { transform: translate(0,0) scale(1); }
  33% { transform: translate(30px,-50px) scale(1.1); }
  66% { transform: translate(-20px,20px) scale(0.9); }
}
.blob { animation: blob 8s infinite; }
.blob-delay-2 { animation-delay: 2s; }
.blob-delay-4 { animation-delay: 4s; }
</style>

<!-- Put these behind hero content, pointer-events-none -->
<div class="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl blob pointer-events-none"></div>
<div class="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl blob blob-delay-4 pointer-events-none"></div>
```

---

## GRADIENT HERO BACKGROUND (animated)
```html
<style>
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animated-gradient {
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}
</style>

<section class="animated-gradient min-h-screen" style="background-image: linear-gradient(135deg, #1e3a8a, #312e81, #1e3a8a, #0c1f4a);">
  <!-- hero content -->
</section>
```

---

## 3D CARD HOVER EFFECT
```html
<style>
.card-3d {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
}
.card-3d:hover {
  transform: perspective(1000px) rotateX(-5deg) rotateY(5deg) translateZ(10px);
  box-shadow: 20px 20px 60px rgba(0,0,0,0.2);
}
</style>

<div class="card-3d bg-white rounded-2xl p-8 cursor-pointer">
  Service card content
</div>
```

---

## COLORED GLOW SHADOWS (on CTAs)
```html
<style>
.glow-primary {
  box-shadow: 0 8px 30px rgba(var(--primary-rgb), 0.4);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.glow-primary:hover {
  box-shadow: 0 12px 50px rgba(var(--primary-rgb), 0.6);
  transform: translateY(-2px);
}
.glow-accent {
  box-shadow: 0 8px 30px rgba(234,88,12,0.4);
}
.glow-accent:hover {
  box-shadow: 0 12px 50px rgba(234,88,12,0.6);
  transform: translateY(-2px);
}
</style>

<a href="tel:[PHONE]" class="glow-accent px-8 py-4 bg-orange-600 text-white font-bold rounded-xl">
  📞 Call Now
</a>
```

---

## STICKY HEADER WITH SCROLL COLOR CHANGE
```html
<header id="site-header" class="fixed top-0 w-full z-50 transition-all duration-300 py-6">
  <!-- nav content -->
</header>

<script>
const header = document.getElementById('site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 80) {
    header.style.cssText = 'background:rgba(255,255,255,0.97);backdrop-filter:blur(12px);box-shadow:0 1px 20px rgba(0,0,0,0.08);padding-top:0.75rem;padding-bottom:0.75rem;';
    header.querySelectorAll('.nav-link').forEach(l => { l.style.color = '#374151'; });
    if (header.querySelector('.logo-text')) header.querySelector('.logo-text').style.color = '#111827';
    if (header.querySelector('.nav-phone')) header.querySelector('.nav-phone').style.color = '#fff';
  } else {
    header.style.cssText = 'background:transparent;backdrop-filter:none;box-shadow:none;padding-top:1.5rem;padding-bottom:1.5rem;';
    header.querySelectorAll('.nav-link').forEach(l => { l.style.color = 'rgba(255,255,255,0.85)'; });
    if (header.querySelector('.logo-text')) header.querySelector('.logo-text').style.color = '#fff';
  }
});
</script>
```

---

## BENTO GRID (2025 trend — use for Why Choose Us / Stats)
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4" style="grid-auto-rows: 180px;">
  <!-- Large feature card — 2 cols, 2 rows -->
  <div class="md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 flex flex-col justify-between reveal">
    <div class="text-5xl">🏆</div>
    <div>
      <div class="text-4xl font-black text-white mb-2" data-target="15" data-suffix="+ Years">0</div>
      <p class="text-white/70">Serving [CITY] since [YEAR]</p>
    </div>
  </div>
  <!-- Stat cards -->
  <div class="bg-accent rounded-3xl p-6 flex flex-col justify-between reveal reveal-delay-1">
    <div class="text-3xl">⭐</div>
    <div>
      <div class="text-4xl font-black text-white">4.9</div>
      <div class="text-white/80 text-sm">Google Rating</div>
    </div>
  </div>
  <div class="bg-gray-900 rounded-3xl p-6 flex flex-col justify-between reveal reveal-delay-2">
    <div class="text-3xl">⚡</div>
    <div>
      <div class="text-4xl font-black text-white">24/7</div>
      <div class="text-gray-400 text-sm">Emergency Service</div>
    </div>
  </div>
  <!-- Full-width CTA strip -->
  <div class="md:col-span-3 bg-primary/10 border border-primary/20 rounded-3xl p-6 flex items-center justify-between reveal">
    <div>
      <p class="font-bold text-gray-900 text-lg">Ready to get started?</p>
      <p class="text-gray-500 text-sm">Free estimates — no obligation</p>
    </div>
    <a href="tel:[PHONE]" class="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition whitespace-nowrap">
      📞 Call Now
    </a>
  </div>
</div>
```

---

## TIMELINE (for About / History sections)
```html
<div class="relative max-w-2xl mx-auto">
  <!-- Vertical line -->
  <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>

  <div class="space-y-10">
    <!-- Item — repeat per milestone -->
    <div class="relative pl-16 reveal">
      <div class="absolute left-0 top-1 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">
        [YR]
      </div>
      <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
        <h3 class="font-bold text-gray-900 text-lg mb-1">[MILESTONE TITLE]</h3>
        <p class="text-gray-500 text-sm">[MILESTONE DESCRIPTION]</p>
      </div>
    </div>
  </div>
</div>
```

---

## WAVE SECTION DIVIDERS
```html
<!-- White section → Gray section transition -->
<div class="overflow-hidden leading-none bg-white">
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none" class="w-full h-12 block" fill="#f9fafb">
    <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"/>
  </svg>
</div>

<!-- Gray section → Primary section transition -->
<div class="overflow-hidden leading-none bg-gray-50">
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none" class="w-full h-12 block" fill="#1d4ed8">
    <path d="M0,0 C480,60 960,0 1440,40 L1440,60 L0,60 Z"/>
  </svg>
</div>
```

---

## DOT GRID BACKGROUND PATTERN
```html
<style>
.dot-bg {
  background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px);
  background-size: 24px 24px;
  background-color: #fff;
}
</style>
<section class="dot-bg py-20">...</section>
```

---

## GRADIENT TEXT
```html
<style>
.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
<h1 class="font-heading text-5xl font-black">
  <span class="gradient-text">[BUSINESS NAME]</span>
</h1>
```

---

## PROGRESS BAR (for About section — e.g., "Customer Satisfaction")
```html
<style>
.progress-bar { width: 0; transition: width 1.5s ease; }
</style>
<div class="space-y-4">
  <div>
    <div class="flex justify-between mb-1 text-sm font-medium text-gray-700">
      <span>Customer Satisfaction</span><span>98%</span>
    </div>
    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div class="progress-bar h-full rounded-full bg-gradient-to-r from-primary to-accent" data-width="98%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between mb-1 text-sm font-medium text-gray-700">
      <span>On-Time Completion</span><span>95%</span>
    </div>
    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div class="progress-bar h-full rounded-full bg-gradient-to-r from-primary to-accent" data-width="95%"></div>
    </div>
  </div>
</div>
<script>
const pbObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.progress-bar').forEach(b => b.style.width = b.dataset.width);
      pbObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.space-y-4').forEach(el => pbObs.observe(el));
</script>
```

---

## BACK TO TOP BUTTON
```html
<button id="back-to-top"
  onclick="window.scrollTo({top:0,behavior:'smooth'})"
  class="fixed bottom-6 right-6 z-40 w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-90"
  style="opacity:0;pointer-events:none;">
  ↑
</button>
<script>
const btt = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) { btt.style.opacity='1'; btt.style.pointerEvents='auto'; }
  else { btt.style.opacity='0'; btt.style.pointerEvents='none'; }
});
</script>
```

---

## STICKY MOBILE CALL BAR (Highest ROI addition to any local biz site)
```html
<!-- Add just before </body> — mobile only, always visible at bottom -->
<div class="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
  <div class="grid grid-cols-2 h-16">
    <a href="tel:[PHONE]"
      class="flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm active:opacity-80 transition-opacity">
      <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
      </svg>
      Call Now
    </a>
    <a href="#contact"
      class="flex items-center justify-center gap-2 bg-gray-900 text-white font-bold text-sm active:opacity-80 transition-opacity">
      <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.628 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
      </svg>
      Free Quote
    </a>
  </div>
</div>
<!-- Spacer so footer content isn't hidden behind bar -->
<div class="h-16 md:hidden"></div>
```

---

## TESTIMONIAL AUTO-SCROLL CAROUSEL
```html
<div class="relative overflow-hidden" id="testimonial-carousel">
  <div class="flex gap-6 transition-transform duration-500 ease-in-out" id="carousel-track">
    <!-- Testimonial card — repeat 3-5x -->
    <div class="min-w-[320px] md:min-w-[380px] bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex-shrink-0">
      <div class="flex text-yellow-400 text-xl mb-4">★★★★★</div>
      <p class="text-gray-700 leading-relaxed mb-6 italic">"[TESTIMONIAL TEXT]"</p>
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
          [INITIAL]
        </div>
        <div>
          <p class="font-semibold text-gray-900 text-sm">[NAME]</p>
          <p class="text-xs text-gray-500">[CITY] Resident</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Prev/Next buttons -->
  <button onclick="moveCarousel(-1)" class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 z-10">‹</button>
  <button onclick="moveCarousel(1)" class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 z-10">›</button>
</div>
<script>
let carouselIndex = 0;
function moveCarousel(dir) {
  const track = document.getElementById('carousel-track');
  const cards = track.children;
  const cardWidth = cards[0].offsetWidth + 24; // gap-6 = 24px
  carouselIndex = Math.max(0, Math.min(carouselIndex + dir, cards.length - 1));
  track.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;
}
// Auto-advance every 5 seconds
setInterval(() => {
  const track = document.getElementById('carousel-track');
  const max = track.children.length - 1;
  if (carouselIndex >= max) carouselIndex = -1;
  moveCarousel(1);
}, 5000);
</script>
```

---

## IMAGE BLUR-UP LAZY LOAD (smooth placeholder → real image)
```html
<style>
.blur-load {
  filter: blur(10px);
  transition: filter 0.4s ease;
}
.blur-load.loaded {
  filter: blur(0);
}
</style>

<div class="aspect-video rounded-2xl overflow-hidden bg-gray-100">
  <img
    src="[ACTUAL_IMAGE_URL]"
    alt="[ALT TEXT]"
    class="blur-load w-full h-full object-cover"
    loading="lazy"
    onload="this.classList.add('loaded')"
  />
</div>
```

---

## ACTIVE NAV LINK HIGHLIGHT ON SCROLL
```html
<script>
// Highlight nav link as user scrolls through sections
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('text-primary', link.getAttribute('href') === '#' + id);
        link.classList.toggle('font-bold', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => sectionObserver.observe(s));
</script>
```

---

## PULSING PHONE NUMBER (draws attention on mobile)
```html
<style>
@keyframes pulse-ring {
  0% { box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(var(--primary-rgb), 0); }
  100% { box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0); }
}
.pulse { animation: pulse-ring 2s infinite; }
</style>
<a href="tel:[PHONE]" class="pulse inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full">
  📞 [PHONE]
</a>
```

---

## TOP GITHUB RESOURCES TO KNOW

| Repo | Stars | What To Use From It |
|------|-------|---------------------|
| aniftyco/awesome-tailwindcss | 13k+ | Master list of all Tailwind tools |
| jamiebuilds/tailwindcss-animate | 4k+ | Animation plugin, keyframe patterns |
| ibelick/motion-primitives | Growing | Animated components, UI patterns |
| romboHQ/tailwindcss-motion | 2k+ | Simple animation classes |
| saadeghi/daisyui | 39k+ | Component library, 35 themes |
| shadcn-ui/ui | 104k+ | Best component patterns |
| themesberg/flowbite | 9k+ | 400+ interactive components |
| markmead/hyperui | 12k+ | Best free Tailwind blocks for local biz |
| cruip/* | Multiple | Business landing page patterns |

## TOP DESIGN TOOLS
- hypercolor.dev — gradient generator
- neumorphism.io — soft shadow generator
- bentogrids.com — bento layout inspiration
- ui.aceternity.com — 200+ animated components
- heroicons.com — clean SVG icons (MIT license)
- undraw.co — free SVG illustrations
- svgbackgrounds.com — free SVG pattern backgrounds
