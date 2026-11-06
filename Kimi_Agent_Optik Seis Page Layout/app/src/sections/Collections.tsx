import { useState } from "react";

type Category = {
  id: string;
  label: string;
  image: string;
  alt: string;
  heading: string;
  copy: string;
  points: string[];
  cta: string;
};

const CATEGORIES: Category[] = [
  {
    id: "resep",
    label: "Kacamata Resep",
    image: "/images/glasses.jpg",
    alt: "Ragam kacamata resep dari asetat tortoise hingga bingkai logam tipis",
    heading: "Resep yang dihitung presisi, bingkai yang dipilih dengan selera.",
    copy: "Dari single vision untuk membaca hingga lensa progresif untuk kebutuhan ganda, setiap resep diolah berdasarkan hasil pemeriksaan, bukan perkiraan.",
    points: [
      "Lensa single vision, bifokal, dan progresif",
      "Lensa blue light dan photochromic",
      "Bingkai asetat Jepang, Italia, hingga titanium",
    ],
    cta: "Temukan bingkai Anda",
  },
  {
    id: "sunglasses",
    label: "Sunglasses",
    image: "/images/sunglasses.jpg",
    alt: "Detail wajah memakai sunglasses hitam berlensa gelap dengan cahaya matahari sore",
    heading: "Perlindungan matahari penuh, karakter yang tetap kentara.",
    copy: "Koleksi sunglasses dari deretan merek desainer internasional dengan perlindungan UV400 penuh, siap menemani dari trotoar kota hingga tepi pantai.",
    points: [
      "Merek desainer internasional pilihan",
      "Perlindungan UV400 pada seluruh lensa",
      "Polarized untuk berkendara dan olahraga",
    ],
    cta: "Jelajahi sunglasses",
  },
  {
    id: "kontak",
    label: "Lensa Kontak",
    image: "/images/lens.jpg",
    alt: "Lensa kontak lembut di ujung jari dengan wadah lensa elegan",
    heading: "Kenyamanan seharian, diawasi oleh ahlinya.",
    copy: "Lensa kontak lembut harian, bulanan, hingga lensa silinder dipasangkan hanya setelah pemeriksaan kesesuaian kornea oleh optisi berpengalaman.",
    points: [
      "Pemeriksaan kesesuaian lensa kontak",
      "Lensa harian, bulanan, warna, dan silinder",
      "Pendampingan adaptasi untuk pemula",
    ],
    cta: "Konsultasi lensa kontak",
  },
];

export default function Collections() {
  const [active, setActive] = useState<Category>(CATEGORIES[0]);

  return (
    <section id="koleksi" className="scroll-mt-28 bg-[#f5f2ec] hairline-b">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="reveal text-[12px] uppercase tracking-[0.3em] text-[#ab8c52] mb-5">
              Tiga etalase utama
            </p>
            <h2 className="reveal font-serif-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.12] max-w-xl">
              Koleksi yang dipilih, bukan sekadar ditumpuk.
            </h2>
          </div>

          {/* Tabs */}
          <div
            className="reveal flex flex-wrap gap-2"
            role="tablist"
            aria-label="Kategori koleksi"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active.id === c.id}
                onClick={() => setActive(c)}
                className={`px-5 py-3 text-[12px] uppercase tracking-[0.18em] transition-colors duration-200 border ${
                  active.id === c.id
                    ? "bg-[#212121] text-[#f5f2ec] border-[#212121]"
                    : "bg-transparent text-[#414042] border-[#cfc7b4] hover:border-[#212121]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab panel */}
        <div
          key={active.id}
          role="tabpanel"
          className="grid md:grid-cols-12 gap-10 md:gap-16 items-center"
        >
          <div className="md:col-span-6">
            <div className="aspect-[4/3] overflow-hidden bg-[#e4ddcf]">
              <img
                src={active.image}
                alt={active.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <h3 className="font-serif-display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.2]">
              {active.heading}
            </h3>
            <p className="mt-5 text-[#414042] leading-[1.75] max-w-[62ch]">
              {active.copy}
            </p>
            <ul className="mt-7 space-y-3">
              {active.points.map((p) => (
                <li key={p} className="flex gap-3 items-baseline text-[15px] text-[#414042]">
                  <span className="text-[#ab8c52] text-lg leading-none">·</span>
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#cabang"
              className="inline-block mt-9 bg-[#212121] text-[#f5f2ec] px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] hover:bg-[#ab8c52] hover:text-[#212121] transition-colors duration-200"
            >
              {active.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
