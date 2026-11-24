import { ShieldCheck, UserCheck, Sparkles, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Therapist Bersertifikat",
    desc: "Semua therapist kami terlatih, bersertifikat resmi, dan sudah melalui seleksi ketat.",
  },
  {
    icon: UserCheck,
    title: "Khusus Klien & Terapis Perempuan",
    desc: "Privasi dan kenyamanan Anda prioritas utama. Kami hanya melayani klien perempuan dengan terapis perempuan bersertifikat.",
  },
  {
    icon: Sparkles,
    title: "Peralatan Higienis",
    desc: "Handuk, minyak, dan alas pijat selalu baru dan steril setiap sesi.",
  },
  {
    icon: BadgeCheck,
    title: "Jaminan Kualitas",
    desc: "Kepuasan Anda adalah prioritas. Kami memastikan setiap sesi dilakukan dengan standar profesional dan teknik terbaik.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-emerald-700 font-semibold tracking-widest text-xs uppercase">
            Kenapa HomeSpa byMeta
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            Dipercaya Ribuan Pelanggan
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Bukan sekadar pijat. Kami hadir dengan standar layanan spa profesional.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}