import { useState } from "react";

const CITIES = [
  "Jakarta",
  "Bogor",
  "Bandung",
  "Semarang",
  "Yogyakarta",
  "Surabaya",
  "Medan",
  "Makassar",
  "Denpasar",
  "Balikpapan",
];

export default function Finder() {
  const [city, setCity] = useState<string>("Jakarta");

  const mapsUrl = `https://www.google.com/maps/search/Optik+Seis+${encodeURIComponent(
    city
  )}`;

  return (
    <section id="cabang" className="scroll-mt-28 bg-[#f5f2ec] hairline-b">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="reveal text-[12px] uppercase tracking-[0.3em] text-[#ab8c52] mb-5">
              Ratusan cabang, satu standar layanan
            </p>
            <h2 className="reveal font-serif-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.12]">
              Selalu ada Optik Seis di dekat Anda.
            </h2>
            <p className="reveal mt-6 text-[#414042] leading-[1.75] max-w-[58ch]">
              Pilih kota Anda, lalu buka peta untuk melihat cabang terdekat.
              Pemeriksaan mata gratis dapat dilakukan tanpa janji temu di jam
              operasional toko.
            </p>
            <div className="reveal mt-8 aspect-[3/2] overflow-hidden">
              <img
                src="/images/store.jpg"
                alt="Interior cabang Optik Seis modern dengan dinding pajangan bingkai bercahaya"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 reveal">
            <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Pilih kota">
              {CITIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCity(c)}
                  aria-pressed={city === c}
                  className={`px-4 py-2.5 text-[12px] uppercase tracking-[0.15em] border transition-colors duration-200 ${
                    city === c
                      ? "bg-[#212121] text-[#f5f2ec] border-[#212121]"
                      : "border-[#cfc7b4] text-[#414042] hover:border-[#212121]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="hairline-t hairline-b py-8">
              <p className="text-[12px] uppercase tracking-[0.2em] text-[#8a8577]">
                Cabang di kawasan Anda
              </p>
              <p className="mt-3 font-serif-display text-3xl md:text-4xl text-[#212121]">
                Optik Seis {city}
              </p>
              <p className="mt-3 text-[15px] text-[#5b5852] leading-[1.7] max-w-[52ch]">
                Kunjungi cabang kami di {city} untuk pemeriksaan mata gratis,
                konsultasi bingkai, dan layanan purna jual.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ab8c52] text-[#212121] px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-[#212121] hover:text-[#f5f2ec] transition-colors duration-200"
                >
                  Buka di Google Maps
                </a>
                <a
                  href="#kontak"
                  className="border border-[#212121] text-[#212121] px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] hover:bg-[#212121] hover:text-[#f5f2ec] transition-colors duration-200"
                >
                  Tanya layanan
                </a>
              </div>
            </div>

            <p className="mt-6 text-[13px] text-[#8a8577]">
              Jam operasional mengikuti pusat perbelanjaan tempat cabang
              berada, umumnya pukul 10.00 sampai 22.00.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
