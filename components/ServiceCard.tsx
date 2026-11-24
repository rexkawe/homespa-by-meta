import Image from "next/image";

// 1. Tipe data tanpa 'price'
type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

// 2. Parameter tanpa 'price'
export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-stone-800">{title}</h3>
        <p className="text-stone-500 text-sm mb-6 leading-relaxed flex-grow">{description}</p>
        
        {/* Bagian Bawah: Hanya Tombol Lihat Harga */}
        <div className="flex items-center justify-end mt-auto pt-4 border-t border-stone-100">
          <a
            href="#harga"
            className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 transition-all group"
          >
            Lihat Harga & Detail 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}