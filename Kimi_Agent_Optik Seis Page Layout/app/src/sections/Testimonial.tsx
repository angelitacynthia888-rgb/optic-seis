import { useState } from "react";

const QUOTES = [
  {
    text: "Tiga generasi keluarga kaki mempercayakan mata mereka ke Optik Seis. Dari kakek saya sampai anak saya yang baru memakai kacamata pertama.",
    name: "Rendra W.",
    role: "Pelanggan sejak 1998, Jakarta",
  },
  {
    text: "Pemeriksaannya teliti sekali. Optisinya menjelaskan kenapa lensa lama saya bikin pusing, lalu merekomendasikan yang lebih pas tanpa menaikkan harga.",
    name: "Sinta M.",
    role: "Pengguna lensa progresif, Bandung",
  },
  {
    text: "Saya pecinta sunglasses dan koleksi mereka selalu jadi etalase pertama yang saya kunjungi. Banyak model yang sulit ditemukan di tempat lain.",
    name: "Dimas P.",
    role: "Kolektor sunglasses, Surabaya",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const q = QUOTES[index];

  const prev = () => setIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length);
  const next = () => setIndex((i) => (i + 1) % QUOTES.length);

  return (
    <section className="bg-[#fbfbfb] hairline-b">
      <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-32 text-center">
        <p className="reveal text-[12px] uppercase tracking-[0.3em] text-[#ab8c52] mb-10">
          Kata mereka yang sudah mempercayakan matanya
        </p>

        <div key={index}>
          <blockquote className="font-serif-display text-[clamp(1.4rem,2.8vw,2.2rem)] leading-[1.4] text-[#212121]">
            “{q.text}”
          </blockquote>
          <p className="mt-8 text-sm font-medium tracking-wide text-[#212121]">
            {q.name}
          </p>
          <p className="mt-1 text-[12px] uppercase tracking-[0.15em] text-[#8a8577]">
            {q.role}
          </p>
        </div>

        <div className="reveal mt-12 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Kutipan sebelumnya"
            className="w-12 h-12 border border-[#cfc7b4] flex items-center justify-center text-[#212121] hover:border-[#212121] hover:bg-[#212121] hover:text-[#f5f2ec] transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <span className="text-[12px] uppercase tracking-[0.2em] text-[#8a8577]">
            {index + 1} / {QUOTES.length}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Kutipan berikutnya"
            className="w-12 h-12 border border-[#cfc7b4] flex items-center justify-center text-[#212121] hover:border-[#212121] hover:bg-[#212121] hover:text-[#f5f2ec] transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
