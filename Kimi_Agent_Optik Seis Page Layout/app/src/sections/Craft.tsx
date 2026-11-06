export default function Craft() {
  return (
    <section className="bg-[#212121] text-[#f5f2ec]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <p className="reveal text-[12px] uppercase tracking-[0.3em] text-[#ab8c52] mb-6">
              Bengkel optik kami
            </p>
            <blockquote className="reveal font-serif-display text-[clamp(1.7rem,3.2vw,2.7rem)] leading-[1.25]">
              “Sebuah bingkai hanya selesai ketika pemakainya lupa bahwa ia
              sedang memakainya.”
            </blockquote>
            <p className="reveal mt-8 text-[15px] leading-[1.8] text-[#b9b3a6] max-w-[56ch]">
              Di balik setiap etalase, ada meja kerja dengan obeng presisi,
              tang penyesuai, dan tangan yang telah melakukan ritual yang sama
              selama puluhan tahun: memasang lensa tanpa tekanan berlebih,
              menyetarakan dudukan hidung, memastikan engsel bergerak halus.
              Itulah bedanya membeli kacamata di tempat yang mengerti.
            </p>
            <p className="reveal mt-8 text-[12px] uppercase tracking-[0.2em] text-[#8a8577]">
              Penyesuaian gratis untuk setiap pembelian, di semua cabang
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 reveal">
            <div className="aspect-square overflow-hidden">
              <img
                src="/images/craft.jpg"
                alt="Tangan pengrajin optik menyesuaikan bingkai titanium dengan obeng presisi"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
