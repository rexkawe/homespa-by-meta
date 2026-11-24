export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">HomeSpa | byMeta</h3>
          <p className="text-sm leading-relaxed">
            Layanan pijat profesional ke rumah. Therapist bersertifikat, higienis, dan tepat waktu.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Kontak</h4>
          <ul className="space-y-2 text-sm">
            <li>WhatsApp: 0896-7359-8285</li>
            <li>Area: Jakarta & sekitarnya</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Jam Operasional</h4>
          <ul className="space-y-2 text-sm">
            <li>Senin – Minggu</li>
            <li>08.00 – 22.00 WIB</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-stone-700 text-xs text-stone-500 text-center">
        © {new Date().getFullYear()} HomeSpa by Meta. Semua hak dilindungi.
      </div>
    </footer>
  );
}