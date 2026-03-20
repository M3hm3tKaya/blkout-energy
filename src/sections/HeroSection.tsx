"use client";

import GlitchText from "@/components/GlitchText";
import NeonParticles from "@/components/NeonParticles";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Neon Grid - hidden on mobile for performance */}
      <div className="neon-grid hidden md:block" />

      {/* Particles */}
      <NeonParticles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-8 w-full max-w-full">
        {/* Product image */}
        <img
          src="/images/product-hero.png"
          alt="BLKOUT Energy Drink"
          className="w-[160px] h-[270px] sm:w-[200px] sm:h-[340px] md:w-[300px] md:h-[500px] object-contain drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]"
        />

        {/* Title */}
        <h1
          className="font-heading text-text uppercase tracking-wider text-center"
          style={{ fontSize: "clamp(3.5rem, 10vw, 12rem)", lineHeight: 0.9 }}
        >
          <GlitchText text="BLKOUT" delay={300} />
        </h1>

        {/* Subtitle */}
        <p className="font-body text-neon-green text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-glow-green text-center">
          Uyandıran Enerji
        </p>

        {/* CTA */}
        <a
          href="#ozellikler"
          className="mt-2 sm:mt-4 px-6 sm:px-8 py-3 min-h-[44px] flex items-center justify-center border border-neon-green text-neon-green font-body text-sm uppercase tracking-wider
                     hover:bg-neon-green hover:text-bg transition-all duration-300 ease-out
                     hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]"
        >
          Şimdi Keşfet
        </a>
      </div>

      {/* Scroll indicator - hidden on small mobile to save space */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-text-muted text-xs font-body uppercase tracking-wider">
          Scroll
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-neon-green"
        >
          <path
            d="M10 4v12m0 0l-4-4m4 4l4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
