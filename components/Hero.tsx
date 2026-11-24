// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-emerald-50/50">
      {/* Container utama dibuat lebih seimbang (items-center) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 py-16 md:py-24">
        
        {/* Kolom Kiri: Teks */}
        <div className="text-left flex flex-col justify-center">
          <span className="inline-block text-emerald-700 font-semibold tracking-widest text-xs uppercase mb-3">
            Layanan Pijat Profesional ke Rumah
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight mb-5">
            Relaksasi Premium, <br /> Langsung di Pintu Anda.
          </h1>
          <p className="text-lg text-stone-600 mb-8 max-w-lg">
            Therapist bersertifikat siap meredakan pegal dan stres Anda.
            Booking mudah, datang tepat waktu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#layanan"
              className="bg-emerald-700 text-white text-center px-8 py-3 rounded-full font-semibold hover:bg-emerald-800 transition shadow-lg shadow-emerald-200/60"
            >
              Lihat Layanan
            </a>
            <a
              href="https://wa.me/6289673598285"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-800 text-center border border-emerald-200 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="relative w-full h-100 md:h-125 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-200/50">
          <Image
            src="/images/hero/hero-homespa.png"
            alt="Suasana relaksasi pijat HomeSpa byMeta"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        
      </div>
    </section>
  );
}