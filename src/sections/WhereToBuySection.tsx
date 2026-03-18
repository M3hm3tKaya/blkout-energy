"use client";

import SectionReveal from "@/components/SectionReveal";

const STORES = [
  "Migros",
  "A101",
  "BIM",
  "Sok",
  "CarrefourSA",
  "Getir",
];

export default function WhereToBuySection() {
  return (
    <section id="satin-al" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <h2 className="font-heading text-5xl md:text-7xl text-center uppercase tracking-wider mb-4">
            Nereden Alinir
          </h2>
          <p className="font-body text-text-muted text-center text-sm uppercase tracking-widest mb-16">
            Sana en yakin noktada BLKOUT seni bekliyor
          </p>
        </SectionReveal>

        {/* Store logos grid */}
        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-16">
            {STORES.map((store) => (
              <div
                key={store}
                className="bg-bg-card border border-neon-green/10 rounded-lg h-24 flex items-center justify-center
                           hover:border-neon-green/40 transition-all duration-300 group cursor-pointer
                           hover:shadow-[0_0_15px_rgba(0,255,136,0.1)]"
              >
                <span className="font-body text-text-muted text-sm uppercase tracking-wider group-hover:text-neon-green transition-colors duration-300">
                  {store}
                </span>
              </div>
            ))}
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
              Online Siparis
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
