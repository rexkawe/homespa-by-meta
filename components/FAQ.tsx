const faqs = [
  {
    q: "Apakah therapist-nya laki-laki atau perempuan?",
    a: "Kami hanya menyediakan therapist perempuan yang profesional dan bersertifikat. Kami juga secara khusus hanya melayani klien perempuan untuk memberikan rasa aman, nyaman, dan privasi yang maksimal.",
  },
  {
    q: "Area mana saja yang dilayani?",
    a: "Saat ini kami melayani Jakarta, Depok, Tangerang, dan Bekasi. Untuk area lain, hubungi WhatsApp kami untuk cek ketersediaan.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Pembayaran bisa transfer bank, QRIS, atau tunai langsung ke therapist. DP 50% diperlukan untuk konfirmasi jadwal.",
  },
  {
    q: "Apakah alat pijat dibawa sendiri?",
    a: "Ya, therapist kami membawa alas pijat, handuk bersih, dan minyak pijat. Anda hanya perlu menyediakan ruangan yang nyaman.",
  },
  {
    q: "Bisa batalkan atau reschedule?",
    a: "Bisa, minimal 3 jam sebelum jadwal. Pembatalan mendadak dikenakan biaya 25% dari harga layanan.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-semibold tracking-widest text-xs uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            Pertanyaan yang Sering Ditanya
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group p-5 rounded-2xl bg-stone-50 border border-stone-100 open:bg-emerald-50/40 open:border-emerald-200 transition"
            >
              <summary className="cursor-pointer font-semibold text-stone-900 list-none flex justify-between items-center">
                {f.q}
                <span className="text-emerald-700 group-open:rotate-45 transition-transform text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-stone-600 leading-relaxed text-sm">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}