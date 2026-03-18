# Tech Context: BLKOUT Energy

## Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.2.0 | React framework with App Router |
| react | 19.2.4 | UI library |
| tailwindcss | ^4 | Utility-first CSS |
| gsap | ^3.14.2 | Animation library (available but Framer Motion preferred) |
| @gsap/react | ^2.1.2 | React bindings for GSAP |
| framer-motion | ^12.38.0 | Declarative animations |
| lenis | ^1.3.19 | Smooth scroll |
| clsx | ^2.1.1 | Conditional classnames |

## Tailwind v4 Notes
- Uses `@import "tailwindcss"` instead of `@tailwind` directives
- Theme tokens defined with `@theme inline {}` block
- Custom colors accessed as `text-neon-green`, `bg-bg-card`, etc.
- No separate tailwind.config.ts needed for basic theming

## TypeScript Config
- Target: ES2017
- Module: esnext with bundler resolution
- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled

## Build & Dev
- `npm run dev` — Development server with Turbopack
- `npm run build` — Production build
- `npm run lint` — ESLint check

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Canvas API required for NeonParticles
- CSS backdrop-filter for Navbar blur
