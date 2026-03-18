# System Patterns: BLKOUT Energy

## Architecture
- **Framework**: Next.js 16 App Router with `src/` directory
- **Rendering**: Server Components by default, "use client" only where needed
- **Styling**: Tailwind CSS v4 with @theme inline for custom tokens

## Directory Structure
```
src/
  app/
    layout.tsx      — Root layout with fonts and metadata
    page.tsx        — Main page composing all sections
    globals.css     — Tailwind imports, CSS variables, utilities
  components/
    GlitchText.tsx  — Character-by-character reveal animation
    NeonCard.tsx    — Reusable card with neon border + hover glow
    NeonParticles.tsx — Canvas-based floating neon particles
    Navbar.tsx      — Fixed navigation with mobile menu
    SectionReveal.tsx — Scroll-triggered fade-up animation
    SmoothScroll.tsx — Lenis smooth scroll wrapper
  sections/
    HeroSection.tsx
    FeaturesSection.tsx
    FlavorsSection.tsx
    LifestyleSection.tsx
    WhereToBuySection.tsx
    FooterSection.tsx
```

## Key Patterns
1. **Client vs Server**: Canvas (NeonParticles), animation (GlitchText), scroll (SmoothScroll), and interactive (Navbar) components use "use client"
2. **Section composition**: Each section is a self-contained component imported into page.tsx
3. **Animation strategy**: Framer Motion for scroll reveals, vanilla JS for glitch text, Canvas API for particles
4. **Color system**: CSS custom properties via Tailwind @theme inline for neon colors
5. **Typography**: Google Fonts via next/font (Bebas Neue for headings, Space Grotesk for body)

## Component Conventions
- NeonCard accepts `neonColor` prop as hex string for dynamic styling
- SectionReveal wraps content with InView-triggered fade-up
- GlitchText uses setInterval for character-by-character reveal
