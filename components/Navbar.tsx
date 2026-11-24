import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        
        {/* LOGO & BRAND */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/icon.png" // Pastikan file ini ada di folder public/logo/
            alt="Logo Homespa by Meta"
            width={45}
            height={45}
            className="rounded-full object-cover shadow-sm border border-stone-100"
            priority
          />
          <div className="flex flex-col justify-center">
            <span className="text-xl md:text-2xl font-extrabold text-stone-800 tracking-tight leading-none">
              HomeSpa
            </span>
            <span className="text-xs md:text-sm text-amber-700 font-semibold italic mt-0.5">
              by Meta
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <li><a href="#layanan" className="hover:text-amber-700 transition">Layanan</a></li>
          <li><a href="#harga" className="hover:text-amber-700 transition">Harga</a></li>
          <li><a href="#faq" className="hover:text-amber-700 transition">FAQ</a></li>
          <li><a href="#kontak" className="hover:text-amber-700 transition">Kontak</a></li>
        </ul>

        {/* TOMBOL CTA */}
        <a
          href="https://wa.me/6289673598285?text=Halo%20Homespa%20by%20Meta%2C%20saya%20mau%20booking%20jadwal%20spa%20%2F%20pijat"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-700 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-amber-800 transition text-sm shadow-md shadow-amber-700/20"
        >
          Booking via WhatsApp
        </a>
      </div>
    </nav>
  );
}