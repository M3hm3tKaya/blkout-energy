"use client";

import NeonCard from "@/components/NeonCard";
import SectionReveal from "@/components/SectionReveal";

const FEATURES = [
  {
    title: "200mg Kafein",
    description: "Yuksek performans icin optimize edilmis kafein formulasyonu ile butun gun enerji.",
    color: "#00FF88",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" stroke="#00FF88" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    title: "Sifir Seker",
    description: "Tatli tat, sifir kalori. Saglikli yasam tarzina uygun formul.",
    color: "#FF3366",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#FF3366" strokeWidth="1.5" fill="none" />
        <path d="M16 16L32 32M32 16L16 32" stroke="#FF3366" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "B Vitamin",
    description: "B6 ve B12 vitamin kompleksi ile metabolizmayi hizlandiran destek.",
    color: "#00BFFF",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#00BFFF" strokeWidth="1.5" fill="none" />
        <path d="M20 16v16m0-16h5a4 4 0 010 8h-5m0 0h6a4 4 0 010 8h-6" stroke="#00BFFF" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="ozellikler" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <h2 className="font-heading text-5xl md:text-7xl text-center uppercase tracking-wider mb-4">
            Neden BLKOUT?
          </h2>
          <p className="font-body text-text-muted text-center text-sm uppercase tracking-widest mb-16">
            Her yudumda fark yaratan formulasyon
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <SectionReveal key={feature.title} delay={i * 0.15}>
              <NeonCard neonColor={feature.color} className="text-center h-full">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3
                  className="font-heading text-3xl uppercase tracking-wider mb-3"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>
                <p className="font-body text-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </NeonCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
