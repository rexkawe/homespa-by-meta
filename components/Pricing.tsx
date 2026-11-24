import { Sparkles } from "lucide-react";

const mainServices = [
  {
    category: "Body Massage",
    items: [
      { name: 'Bodymassage 90"', price: "150.000" },
      { name: 'Bodymassage 120"', price: "195.000" },
    ],
  },
  {
    category: "Body Massage + Totok Wajah",
    items: [
      { name: 'Body massage + totok wajah 90"', price: "150.000" },
      { name: 'Body massage + totok wajah 120"', price: "195.000" },
    ],
  },
  {
    category: "Body Massage + Scrub Badan",
    items: [
      { name: 'Body massage + scrub badan 90"', price: "150.000" },
      { name: 'Body massage + scrub badan 120"', price: "195.000" },
    ],
  },
];

const packages = [
  {
    name: "Paket Jasmine",
    price: "350.000",
    features: ["Body massage", "Totok wajah", "Lulur pengantin", "Sheetmask", "Ratus", "Sauna"],
    popular: true,
  },
  {
    name: "Paket Lily",
    price: "250.000",
    features: ["Body massage", "Scrub badan", "Masker badan"],
    popular: false,
  },
  {
    name: "Paket Tulip",
    price: "195.000",
    features: ["Body massage", "Totok wajah", "Peeling wajah", "Masker sheetmask"],
    popular: false,
  },
  {
    name: "Paket Getwellson",
    price: "195.000",
    features: ["Body massage", "Kerokan"],
    popular: false,
  },
];

const addOns = [
  { name: "Manicure", price: "50.000" },
  { name: "Pedicure basic", price: "60.000" },
  { name: 'Totok wajah 30"', price: "70.000" },
  { name: "Sheetmask", price: "10.000" },
  { name: "Callus treatment", price: "40.000" },
  { name: "Waxing underarm", price: "60.000" },
  { name: "Waxing kaki", price: "135.000" },
  { name: "Waxing full leg", price: "170.000" },
  { name: "Waxing tangan", price: "100.000" },
  { name: "Lulur full body", price: "100.000" },
  { name: "Masker badan", price: "100.000" },
  { name: "Ratus vagina", price: "70.000" },
  { name: "Kerokan", price: "50.000" },
];

export default function Pricing() {
  return (
    <section id="harga" className="py-20 px-4 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-amber-700 font-semibold tracking-widest text-xs uppercase">
            Menu & Harga
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-stone-900">
            Pilih Perawatan Favorit Anda
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Harga transparan, tanpa biaya tersembunyi. Therapist kami datang lengkap dengan peralatan higienis.
          </p>
        </div>

        {/* BAGIAN 1: BODY MASSAGE & PAKET KOMBO */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          
          {/* Kolom Kiri: Body Massage Ala Carte */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2 border-b border-stone-100 pb-4">
              {/* Ikon di sini sudah diberi warna amber-600 */}
              <Sparkles className="text-amber-600" size={24} /> Body Massage
            </h3>
            <div className="space-y-8">
              {mainServices.map((service) => (
                <div key={service.category}>
                  <h4 className="font-bold text-stone-700 mb-3">{service.category}</h4>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item.name} className="flex justify-between items-center text-sm text-stone-600">
                        <span>{item.name}</span>
                        <span className="font-semibold text-stone-800 whitespace-nowrap ml-4">
                          Rp {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Paket Komplit */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
              Paket Spesial
            </h3>
            {/* pt-4 ditambahkan agar badge Best Seller tidak terpotong di atas */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`p-6 rounded-2xl border transition relative flex flex-col justify-between ${
                    pkg.popular
                      ? "bg-amber-800 text-white border-amber-800 shadow-xl"
                      : "bg-white border-stone-200 text-stone-800 hover:border-amber-300"
                  }`}
                >
                  {/* Badge Best Seller */}
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-stone-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm">
                      Best Seller
                    </span>
                  )}
                  <div>
                    <h4 className="font-bold text-lg mb-3">{pkg.name}</h4>
                    <ul className={`text-xs space-y-2 mb-4 ${pkg.popular ? "text-amber-100" : "text-stone-500"}`}>
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span>•</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Warna harga disesuaikan */}
                  <div className={`text-xl font-extrabold ${pkg.popular ? "text-white" : "text-amber-700"}`}>
                    Rp {pkg.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BAGIAN 2: ADD ONS */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-stone-800">Layanan Tambahan (Add-Ons)</h3>
            <p className="text-sm text-stone-500 mt-2">Bisa ditambahkan ke paket atau layanan utama Anda.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
            {addOns.map((addon) => (
              <div key={addon.name} className="flex justify-between items-center py-2 border-b border-stone-100 text-sm">
                <span className="text-stone-600">{addon.name}</span>
                <span className="font-semibold text-stone-800">Rp {addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BAWAH */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/6289673598285?text=Halo%20Homespa%20by%20Meta%2C%20saya%20mau%20booking%20jadwal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-800 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-900 transition shadow-lg shadow-amber-800/30 text-lg"
          >
            Booking Sekarang via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}