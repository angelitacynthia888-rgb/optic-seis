export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[100dvh] flex items-end">
      <img
        src="/images/hero.jpg"
        alt="Pria Indonesia memakai sunglasses desainer di jalanan kota saat matahari sore"
        className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/70 via-[#212121]/10 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <p className="reveal text-[12px] uppercase tracking-[0.3em] text-[#e9dfc9] mb-6">
            Jaringan Optik Profesional · Sejak 1927
          </p>
          <h1 className="reveal font-serif-display text-[#fbfbfb] leading-[1.05] text-[clamp(2.4rem,6vw,4.6rem)]">
            Merawat cara Anda
            <br />
            melihat dunia.
          </h1>
          <p className="reveal mt-6 max-w-xl text-[#e9e4d8] text-base md:text-lg leading-relaxed">
            Pemeriksaan mata profesional, kacamata resep, sunglasses desainer
            internasional, dan lensa kontak berkualitas, kini di ratusan cabang
            di seluruh Indonesia.
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#cabang"
              className="bg-[#ab8c52] text-[#212121] px-8 py-4 text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-[#f5f2ec] transition-colors duration-200"
            >
              Jadwalkan Periksa Mata
            </a>
            <a
              href="#koleksi"
              className="text-[#f5f2ec] text-[13px] uppercase tracking-[0.2em] underline underline-offset-8 decoration-[#ab8c52] hover:text-[#ab8c52] transition-colors duration-200"
            >
              Lihat Koleksi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
