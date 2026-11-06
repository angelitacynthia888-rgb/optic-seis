import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("done");
  };

  return (
    <footer id="kontak" className="scroll-mt-28 bg-[#212121] text-[#f5f2ec]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 md:pt-28 pb-10">
        {/* CTA + newsletter */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start pb-16 border-b border-[#3a3a38]">
          <div className="md:col-span-6">
            <p className="reveal text-[12px] uppercase tracking-[0.3em] text-[#ab8c52] mb-5">
              Tetap terhubung
            </p>
            <h2 className="reveal font-serif-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.15]">
              Kabar koleksi dan promo,
              <br />
              langsung ke surel Anda.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 reveal">
            {status === "done" ? (
              <p className="text-[#e9dfc9] leading-[1.7] border border-[#ab8c52] px-6 py-5">
                Terima kasih telah bergabung. Kabar terbaru Optik Seis akan
                tiba di kotak masuk Anda.
              </p>
            ) : (
              <form onSubmit={submit} noValidate>
                <label
                  htmlFor="newsletter-email"
                  className="block text-[12px] uppercase tracking-[0.2em] text-[#b9b3a6] mb-3"
                >
                  Alamat surel
                </label>
                <div className="flex">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setStatus("idle");
                    }}
                    placeholder="nama@surel.com"
                    className="flex-1 min-w-0 bg-transparent border border-[#3a3a38] focus:border-[#ab8c52] px-4 py-3.5 text-[15px] placeholder:text-[#6e6a60] outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#ab8c52] text-[#212121] px-6 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-[#f5f2ec] transition-colors duration-200"
                  >
                    Daftar
                  </button>
                </div>
                {status === "error" && (
                  <p className="mt-3 text-sm text-[#e0a080]">
                    Mohon periksa kembali format surel Anda.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid md:grid-cols-12 gap-10 py-14">
          <div className="md:col-span-5">
            <p className="font-serif-display text-2xl">
              Optik <span className="italic text-[#ab8c52]">Seis</span>
            </p>
            <p className="mt-4 text-[15px] text-[#b9b3a6] leading-[1.75] max-w-[46ch]">
              Jaringan toko optik profesional sejak 1927. Merawat kesehatan
              penglihatan sekaligus gaya hidup modern Indonesia.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[12px] uppercase tracking-[0.2em] text-[#8a8577] mb-5">
              Jelajahi
            </p>
            <ul className="space-y-3 text-[15px]">
              {[
                ["Warisan", "#warisan"],
                ["Koleksi", "#koleksi"],
                ["Layanan", "#layanan"],
                ["Cabang", "#cabang"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-[#b9b3a6] hover:text-[#ab8c52] transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-[12px] uppercase tracking-[0.2em] text-[#8a8577] mb-5">
              Koleksi
            </p>
            <ul className="space-y-3 text-[15px] text-[#b9b3a6]">
              <li>Kacamata resep</li>
              <li>Sunglasses</li>
              <li>Lensa kontak</li>
              <li>Aksesori</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-[12px] uppercase tracking-[0.2em] text-[#8a8577] mb-5">
              Ikuti kami
            </p>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a
                  href="https://www.instagram.com/optikseis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b9b3a6] hover:text-[#ab8c52] transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/optikseis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b9b3a6] hover:text-[#ab8c52] transition-colors duration-200"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@optikseis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b9b3a6] hover:text-[#ab8c52] transition-colors duration-200"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3a3a38] pt-8 flex flex-col md:flex-row justify-between gap-3 text-[12px] uppercase tracking-[0.15em] text-[#8a8577]">
          <p>© 2026 Optik Seis. Seluruh hak cipta dilindungi.</p>
          <p>Sejak 1927 · Ratusan cabang di Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
