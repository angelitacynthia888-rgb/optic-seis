const MILESTONES = [
  {
    era: "1927",
    title: "Berdiri di Jakarta",
    text: "Sebuah toko kecil di pusat perdagangan mulai melayani kebutuhan kacamata masyarakat kolonial dan pribumi dengan ketelitian tukang lensa Belanda yang diasah oleh para perajin lokal.",
  },
  {
    era: "1950-an",
    title: "Kepercayaan lintas generasi",
    text: "Setelah kemerdekaan, keluarga pendiri merawat nama baik lewat layanan pemeriksaan mata yang jujur dan lensa yang dihitung tepat, bukan sekadar dijual.",
  },
  {
    era: "Kini",
    title: "Ratusan cabang, satu standar",
    text: "Dari Aceh hingga Papua, setiap cabang Optik Seis menjaga standar yang sama: optisi profesional, alat pemeriksaan modern, dan bingkai pilihan dari merek terbaik dunia.",
  },
];

export default function Heritage() {
  return (
    <section id="warisan" className="scroll-mt-28 bg-[#fbfbfb] hairline-b">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Image, offset upward on desktop for asymmetry */}
          <div className="md:col-span-5 reveal md:-mt-10">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/heritage.jpg"
                alt="Interior toko optik tempo dulu dengan lemari kayu berisi kacamata bulat"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-[12px] uppercase tracking-[0.2em] text-[#8a8577]">
              Toko optik awal, awal abad ke-20
            </p>
          </div>

          {/* Text column */}
          <div className="md:col-span-6 md:col-start-7">
            <p className="reveal text-[12px] uppercase tracking-[0.3em] text-[#ab8c52] mb-6">
              Hampir satu abad merawat penglihatan
            </p>
            <h2 className="reveal font-serif-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.12]">
              Warisan yang diwariskan lewat ketepatan, bukan janji.
            </h2>
            <p className="reveal mt-6 text-[#414042] leading-[1.75] max-w-[68ch]">
              Optik Seis lahir dari keyakinan sederhana: mata hanya punya satu,
              dan setiap pasang lensa harus dihitung seperti kesalahan kecil pun
              berarti. Prinsip itu tidak berubah sejak hari pertama.
            </p>

            <div className="mt-12 space-y-0 hairline-t">
              {MILESTONES.map((m) => (
                <div key={m.era} className="reveal grid grid-cols-[96px_1fr] gap-6 py-6 hairline-b">
                  <span className="font-serif-display italic text-[#ab8c52] text-xl">
                    {m.era}
                  </span>
                  <div>
                    <h3 className="text-[#212121] font-medium">{m.title}</h3>
                    <p className="mt-2 text-[#5b5852] text-[15px] leading-[1.7]">
                      {m.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="reveal mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e4ddcf] hairline-t hairline-b">
          {[
            ["1927", "Tahun berdiri"],
            ["Ratusan", "Jaringan toko di Indonesia"],
            ["Ribuan", "Pilihan bingkai dan lensa"],
            ["Profesional", "Optisi dan refaksionis bersertifikat"],
          ].map(([num, label]) => (
            <div key={label as string} className="bg-[#fbfbfb] px-6 py-8">
              <p className="font-serif-display text-3xl md:text-4xl text-[#212121]">
                {num}
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.15em] text-[#8a8577]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
