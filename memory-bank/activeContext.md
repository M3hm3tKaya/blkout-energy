# Active Context: BLKOUT Energy

## Current State
Project is fully implemented with all 6 sections, components, and styling complete.

## Recent Changes
- Initial project setup with Next.js 16, TypeScript, Tailwind v4
- All 6 components created (GlitchText, NeonCard, NeonParticles, Navbar, SectionReveal, SmoothScroll)
- All 6 sections implemented (Hero, Features, Flavors, Lifestyle, WhereToBuy, Footer)
- Global CSS with neon glow utilities, grid background, scrollbar styling
- Layout with Bebas Neue and Space Grotesk fonts

## Active Decisions
- Used Framer Motion for scroll-triggered reveals instead of GSAP for simplicity
- Canvas API for particles instead of DOM elements for performance
- Inline style for dynamic neon colors (NeonCard, FlavorsSection) since Tailwind can't handle runtime color values
- Lenis for smooth scroll instead of native CSS scroll-behavior

## Known Considerations
- Product images are placeholders (colored rectangles with neon borders)
- Store logos in WhereToBuy section are text placeholders
- Social links in footer point to "#" (no real URLs)
- Turkish characters simplified (no special chars like ş, ğ, ü, ö, ç, ı) for font compatibility
