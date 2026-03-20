"use client";

import SectionReveal from "@/components/SectionReveal";

const FLAVORS = [
  {
    name: "Original",
    description: "Klasik BLKOUT formülü. Güçlü, keskin ve uyandırıcı.",
    color: "#00FF88",
    glowClass: "glow-green",
    image: "/images/flavor-original.png",
  },
  {
    name: "Berry Blast",
    description: "Orman meyveleri esintisi ile tatlı ve canlandırıcı bir patlama.",
    color: "#FF3366",
    glowClass: "glow-pink",
    image: "/images/flavor-berry.png",
  },
  {
    name: "Citrus Storm",
    description: "Narenciye fırtınası. Taze, keskin, enerji dolu bir deneyim.",
    color: "#FF8800",
    glowClass: "glow-orange",
    image: "/images/flavor-citrus.png",
  },
];

export default function FlavorsSection() {
  return (
    <section id="tatlar" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-7xl text-center uppercase tracking-wider mb-4">
            Tatlar
          </h2>
          <p className="font-body text-text-muted text-center text-xs sm:text-sm uppercase tracking-widest mb-10 sm:mb-16">
            Her damak tadına uygun seçenekler
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {FLAVORS.map((flavor, i) => (
            <SectionReveal key={flavor.name} delay={i * 0.15}>
              <div className="flex flex-col items-center group">
                {/* Product image */}
                <div
                  className="w-[160px] h-[270px] sm:w-[180px] sm:h-[300px] md:w-[220px] md:h-[370px] rounded-xl mb-4 sm:mb-6 overflow-hidden
                             transition-all duration-500 ease-out group-hover:scale-105"
                  style={{
                    border: `1px solid ${flavor.color}66`,
                    boxShadow: `0 0 20px ${flavor.color}20`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 40px ${flavor.color}40, 0 0 80px ${flavor.color}15`;
                    e.currentTarget.style.borderColor = flavor.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${flavor.color}20`;
                    e.currentTarget.style.borderColor = `${flavor.color}66`;
                  }}
                >
                  <img
                    src={flavor.image}
                    alt={`BLKOUT ${flavor.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3
                  className="font-heading text-2xl sm:text-3xl uppercase tracking-wider mb-2"
                  style={{ color: flavor.color }}
                >
                  {flavor.name}
                </h3>

                {/* Description */}
                <p className="font-body text-text-muted text-sm text-center leading-relaxed max-w-[260px]">
                  {flavor.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
