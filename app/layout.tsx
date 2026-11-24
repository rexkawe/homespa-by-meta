import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css"; // PASTIKAN BARIS INI ADA

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HomeSpa | byMeta — Pijat Profesional ke Rumah Anda",
  description: "Layanan pijat tradisional, aromatherapy, dan refleksi oleh therapist bersertifikat.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={jakarta.variable}>
      {/* PASTIKAN className body SEPERTI INI */}
      <body className="font-sans antialiased bg-stone-50 text-stone-800">
        {children}
      </body>
    </html>
  );
}