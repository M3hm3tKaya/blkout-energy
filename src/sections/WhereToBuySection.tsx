"use client";

import SectionReveal from "@/components/SectionReveal";

export default function WhereToBuySection() {
  return (
    <section id="satin-al" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <h2 className="font-heading text-5xl md:text-7xl text-center uppercase tracking-wider mb-4">
            Nereden Alınır
          </h2>
          <p className="font-body text-text-muted text-center text-sm uppercase tracking-widest mb-16">
            Sana en yakın noktada BLKOUT seni bekliyor
          </p>
        </SectionReveal>

        {/* Store logos */}
        <SectionReveal delay={0.2}>
          <div className="flex justify-center mb-16">
            <img
              src="/images/store-logos.png"
              alt="Migros, A101, BIM, Sok, CarrefourSA, Getir"
              className="w-full max-w-4xl h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </SectionReveal>

        {/* Online CTA */}
        <SectionReveal delay={0.3}>
          <div className="text-center">
            <a
              href="#"
              className="inline-block px-10 py-4 bg-neon-green text-bg font-heading text-2xl uppercase tracking-wider
                         hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all duration-300 ease-out
                         hover:scale-105"
            >
              Online Sipariş
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
