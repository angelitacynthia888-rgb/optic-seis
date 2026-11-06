const SERVICES = [
  {
    title: "Pemeriksaan mata komprehensif",
    text: "Refaksi komputerisasi dan manual oleh optisi berpengalaman untuk membaca kebutuhan resep Anda secara utuh, termasuk tekanan bola mata dan kesehatan permukaan kornea.",
  },
  {
    title: "Rekomendasi lensa yang jujur",
    text: "Kami menjelaskan perbedaan setiap jenis lensa dengan bahasa sederhana, lalu menyerahkan keputusan pada Anda. Tidak ada resep yang dipaksakan, tidak ada lensa yang dijejalkan.",
  },
  {
    title: "Penyesuaian dan perbaikan bingkai",
    text: "Bingkai melorot atau lensa lecet? Bengkel kami menyesuaikan ulang setiap bingkai agar kembali pas di wajah Anda, tanpa biaya tambahan di cabang mana pun.",
  },
  {
    title: "Pendampingan lensa kontak",
    text: "Untuk pemula, kami mendampingi cara memasang, melepas, dan merawat lensa kontak sampai Anda benar-benar percaya diri melakukannya sendiri.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="scroll-mt-28 bg-[#fbfbfb] hairline-b">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Sticky image column */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/exam.jpg"
                  alt="Optisi memeriksa mata pasien menggunakan alat phoropter modern"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-[12px] uppercase tracking-[0.2em] text-[#8a8577]">
                Ruang pemeriksaan Optik Seis
              </p>
            </div>
          </div>

          {/* Scrolling service list */}
          <div className="md:col-span-6 md:col-start-7">
            <p className="reveal text-[12px] uppercase tracking-[0.3em] text-[#ab8c52] mb-5">
              Layanan di setiap kunjungan
            </p>
            <h2 className="reveal font-serif-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.12] mb-12">
              Diperiksa dengan teliti,
              <br />
              dilayani dengan sabar.
            </h2>

            <div className="hairline-t">
              {SERVICES.map((s, i) => (
                <article key={s.title} className="reveal py-8 hairline-b grid grid-cols-[40px_1fr] gap-5">
                  <span className="font-serif-display italic text-2xl text-[#cfc7b4]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-[#212121]">{s.title}</h3>
                    <p className="mt-3 text-[15px] text-[#5b5852] leading-[1.75] max-w-[58ch]">
                      {s.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <a
              href="#cabang"
              className="reveal inline-block mt-10 border border-[#212121] text-[#212121] px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] hover:bg-[#212121] hover:text-[#f5f2ec] transition-colors duration-200"
            >
              Cari cabang terdekat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
