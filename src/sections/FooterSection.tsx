"use client";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.5L19.5 4h-2l-5 6.2L8 4H4z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="4" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function FooterSection() {
  return (
    <footer className="relative bg-bg border-t border-neon-green/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <span className="font-heading text-4xl md:text-5xl text-neon-green text-glow-green tracking-wider animate-neon-pulse">
            BLKOUT
          </span>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-text-muted hover:text-neon-green transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#" className="font-body text-xs text-text-muted hover:text-text transition-colors duration-300 uppercase tracking-wider">
              Gizlilik Politikasi
            </a>
            <a href="#" className="font-body text-xs text-text-muted hover:text-text transition-colors duration-300 uppercase tracking-wider">
              Kullanim Sartlari
            </a>
            <a href="#" className="font-body text-xs text-text-muted hover:text-text transition-colors duration-300 uppercase tracking-wider">
              Iletisim
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-text-muted/50">
            &copy; 2026 BLKOUT Energy. Tum haklari saklidir.
          </p>
        </div>
      </div>
    </footer>
  );
}
