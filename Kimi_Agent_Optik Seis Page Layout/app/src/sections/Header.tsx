import { useEffect, useState } from "react";

const NAV = [
  { label: "Warisan", href: "#warisan" },
  { label: "Koleksi", href: "#koleksi" },
  { label: "Layanan", href: "#layanan" },
  { label: "Cabang", href: "#cabang" },
  { label: "Kontak", href: "#kontak" },
];

const TICKER = [
  "Gratis pemeriksaan mata di seluruh cabang",
  "Koleksi sunglasses desainer terbaru telah hadir",
  "Melayani Indonesia sejak 1927",
  "Lensa kontak berkualitas dengan pendampingan ahli",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Announcement ticker */}
      <div className="bg-[#212121] text-[#f5f2ec] overflow-hidden py-2" aria-hidden="true">
        <div className="marquee-track gap-12 text-[11px] uppercase tracking-[0.2em]">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-12 shrink-0">
              {TICKER.map((t) => (
                <span key={`${dup}-${t}`} className="whitespace-nowrap">
                  {t} <span className="text-[#ab8c52] mx-4">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-colors duration-300 ${
          scrolled
            ? "bg-[#f5f2ec]/90 backdrop-blur-md hairline-b"
            : "bg-gradient-to-b from-[#212121]/60 to-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-16">
          <a
            href="#beranda"
            className={`font-serif-display text-xl md:text-2xl tracking-wide transition-colors duration-300 ${
              scrolled ? "text-[#212121]" : "text-[#f5f2ec]"
            }`}
          >
            Optik <span className="italic text-[#ab8c52]">Seis</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] uppercase tracking-[0.15em] transition-colors duration-200 ${
                  scrolled
                    ? "text-[#414042] hover:text-[#ab8c52]"
                    : "text-[#efe9dc] hover:text-[#d8c9a3]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cabang"
              className={`text-[13px] uppercase tracking-[0.15em] px-5 py-2.5 transition-colors duration-200 ${
                scrolled
                  ? "bg-[#212121] text-[#f5f2ec] hover:bg-[#ab8c52]"
                  : "bg-[#f5f2ec] text-[#212121] hover:bg-[#ab8c52]"
              }`}
            >
              Periksa Mata
            </a>
          </nav>

          <button
            type="button"
            className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${
              scrolled ? "text-[#212121]" : "text-[#f5f2ec]"
            }`}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 7h18M3 15h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden bg-[#f5f2ec] hairline-b px-6 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.15em] text-[#414042] hover:text-[#ab8c52] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
