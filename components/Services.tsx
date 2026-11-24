import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Body Massage",
    description: "Pijat relaksasi untuk melancarkan peredaran darah, meredakan pegal, dan mengembalikan kebugaran tubuh. Tersedia durasi 90 menit & 120 menit.",
    image: "/images/services/pijat-tradisional.jpg",
  },
  {
    title: "Totok Wajah",
    description: "Perawatan wajah untuk merelaksasi otot wajah, mengurangi kerutan, dan membuat kulit tampak lebih cerah dan segar.",
    image: "/images/services/totokwajah.png",
  },
  {
    title: "Body Scrub & Lulur",
    description: "Eksfoliasi kulit untuk mengangkat sel kulit mati, membuat kulit lebih halus, cerah, dan wangi sepanjang hari.",
    image: "/images/services/scrub.png",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-20 px-4 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold tracking-widest text-xs uppercase">
            Layanan Utama Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-stone-900">
            Pilih Perawatan Sesuai Kebutuhan
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Semua perawatan dilakukan oleh therapist profesional dengan produk berkualitas.
          </p>
        </div>

        {/* GRID KARTU LAYANAN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* TEKS & PANAH KE BAWAH (MENUJU HARGA) */}
        <div className="mt-14 text-center">
          <a 
            href="#harga" 
            className="inline-flex flex-col items-center gap-2 text-stone-500 hover:text-amber-700 transition-colors group"
          >
            <span className="text-sm font-medium">Menu dan paket lainnya ada di bawah ini</span>
            <svg 
              className="w-6 h-6 animate-bounce group-hover:text-amber-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}