"use client";

import SectionReveal from "@/components/SectionReveal";

const LIFESTYLE_ITEMS = [
  {
    text: "Geceyi Fethet",
    color: "#00FF88",
    glowClass: "text-glow-green",
    image: "/images/lifestyle-gaming.png",
  },
  {
    text: "Limitlerini As",
    color: "#FF3366",
    glowClass: "text-glow-pink",
    image: "/images/lifestyle-sports.png",
  },
  {
    text: "Enerjiyi Hisset",
    color: "#00BFFF",
    glowClass: "text-glow-blue",
    image: "/images/lifestyle-nightlife.png",
  },
];

export default function LifestyleSection() {
  return (
    <section id="yasam-tarzi" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <h2 className="font-heading text-5xl md:text-7xl text-center uppercase tracking-wider mb-4">
            Yasam Tarzi
          </h2>
          <p className="font-body text-text-muted text-center text-sm uppercase tracking-widest mb-16">
            BLKOUT bir icki degil, bir tutum
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-0">
          {LIFESTYLE_ITEMS.map((item, i) => (
            <SectionReveal key={item.text} delay={i * 0.15}>
              <div
                className="w-full py-16 md:py-24 flex items-center justify-center relative overflow-hidden group cursor-pointer"
                style={{
                  borderBottom: i < LIFESTYLE_ITEMS.length - 1 ? `1px solid ${item.color}15` : "none",
                }}
              >
                {/* Background image */}
                <img
                  src={item.image}
                  alt={item.text}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                />

                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at center, ${item.color}08 0%, transparent 70%)`,
                  }}
                />

                <h3
                  className={`font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-wider
                             transition-all duration-500 ease-out group-hover:scale-105 ${item.glowClass}`}
                  style={{ color: item.color }}
                >
                  {item.text}
                </h3>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
