import { MapPin, Clock, AtSign, Phone } from "lucide-react";

export default function ContactLocation() {
  return (
    <section id="kontak" className="py-20 px-4 bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Teks & Info Kontak */}
          <div>
            <span className="text-amber-700 font-semibold tracking-widest text-xs uppercase">
              Hubungi Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-6 text-stone-900">
              Siap Melayani Anda ke Rumah
            </h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Kami berbasis di area Tangerang Selatan dan melayani area sekitarnya (Jakarta, Depok, Tangerang, Bekasi). 
              Silakan hubungi kami atau kunjungi lokasi kami untuk konsultasi lebih lanjut.
            </p>

            <div className="space-y-6">
              {/* Alamat / Maps Link */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">Homeservice Spa by Meta</h4>
                  <p className="text-stone-500 text-sm mt-1">
                    Silakan cek pin lokasi kami di peta sebelah, atau klik tombol di bawah untuk navigasi langsung.
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Homeservice+Spa+by+Meta" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-700 text-sm font-semibold hover:underline mt-1 inline-block"
                  >
                    Buka di Google Maps →
                  </a>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">Jam Operasional</h4>
                  <p className="text-stone-500 text-sm mt-1">Senin - Minggu: 08.00 - 22.00 WIB</p>
                </div>
              </div>

              {/* Kontak & Sosmed */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">Telepon / WhatsApp</h4>
                  <p className="text-stone-500 text-sm mt-1">0896-7359-8285</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <AtSign size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">Instagram</h4>
                  <a href="https://www.instagram.com/homeservicebymeta?bqrl=MWJ4ODE2MjF5Njg5cg==" target="_blank" rel="noopener noreferrer" className="text-stone-500 text-sm mt-1 hover:text-amber-700">
                    @homeservicebymeta
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Peta Google Maps Asli */}
          <div className="h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border border-stone-200 relative bg-stone-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6472125982846!2d106.78053807399223!3d-6.439332093551829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e94f6cc48a5f%3A0x7b537e9526fac4c1!2sHomeservice%20Spa%20by%20Meta!5e0!3m2!1sid!2sid!4v1795524996384!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Homespa by Meta"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}