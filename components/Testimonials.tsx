import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ibu Sari",
    role: "Karyawan Swasta, Jakarta Selatan",
    text: "Therapist-nya profesional banget. Datang tepat waktu, pijatannya mantap, badan langsung ringan. Langganan deh!",
  },
  {
    name: "Bu Wudi",
    role: "Wirausaha, Jakarta Barat",
    text: "Sering pegal karena kerja di depan laptop. HomeSpa byMeta jadi solusi. Bisa booking malam, therapist datang ke rumah. Recommended.",
  },
  {
    name: "Ibu Rina",
    role: "Ibu Rumah Tangga, Tangerang",
    text: "Awalnya ragu panggil ke rumah, tapi ternyata therapist-nya sopan, higienis, dan harganya masuk akal. Puas banget.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={16} className="fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-amber-700 font-semibold tracking-widest text-xs uppercase">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-stone-900">
            Kata Mereka yang Sudah Coba
          </h2>
        </div>
        
        {/* Grid Testimoni */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="p-6 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col justify-between"
            >
              <div>
                <Stars />
                <p className="text-stone-700 leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <footer>
                <div className="font-bold text-stone-900">{t.name}</div>
                <div className="text-xs text-stone-500">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Teks Tambahan: 5 Bintang & 100++ orang lainnya */}
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="flex gap-1 text-amber-500 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={24} className="fill-current" />
            ))}
          </div>
          <p className="text-stone-600 font-medium text-lg">
            dan <span className="font-bold text-stone-900">100++</span> orang lainnya
          </p>
        </div>

      </div>
    </section>
  );
}