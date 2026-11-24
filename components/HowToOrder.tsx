const steps = [
  {
    num: "01",
    title: "Hubungi via WhatsApp",
    desc: "Klik tombol WhatsApp, pilih layanan dan jadwal yang Anda inginkan.",
  },
  {
    num: "02",
    title: "Konfirmasi & Bayar",
    desc: "Kami konfirmasi jadwal. Pembayaran bisa transfer, QRIS, atau tunai.",
  },
  {
    num: "03",
    title: "Therapist Datang",
    desc: "Therapist kami tiba di rumah Anda tepat waktu, siap memanjakan Anda.",
  },
];

export default function HowToOrder() {
  return (
    <section className="py-20 px-4 bg-emerald-50/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-emerald-700 font-semibold tracking-widest text-xs uppercase">
            Cara Pesan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            Booking Hanya 3 Langkah
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-emerald-200 flex items-center justify-center mx-auto mb-5 shadow-sm">
                <span className="text-2xl font-extrabold text-emerald-700">
                  {s.num}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}