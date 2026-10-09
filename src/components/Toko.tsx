import { basePath } from "../lib/site";

const categories = [
  { label: "Makanan Premium", description: "Untuk kebutuhan makan sesuai jenis dan usia sahabatmu.", image: "food", alt: "Ilustrasi makanan hewan", className: "md:col-span-6", aspect: "md:aspect-[3/2]" },
  { label: "Snack & Treats", description: "Camilan untuk selingan dan momen belajar.", image: "treats", alt: "Ilustrasi camilan untuk hewan", className: "md:col-span-3", aspect: "md:aspect-[4/5]" },
  { label: "Mainan", description: "Teman bermain untuk energi kecil maupun besar.", image: "play-dog", alt: "Ilustrasi anjing dengan mainan berwarna-warni", className: "md:col-span-3", aspect: "md:aspect-[4/5]" },
];

function categoryHref(category: string) {
  const query = new URLSearchParams({ catatan: `Saya ingin menanyakan stok ${category}. Mohon konfirmasi pilihan dan ketersediaannya sebelum saya berkunjung.` });
  return `?${query}#booking`;
}

export default function Toko() {
  return (
    <section id="toko" className="section bg-cream text-ink" aria-labelledby="toko-heading">
      <div className="wrap">
        <div className="mb-9 grid gap-5 md:grid-cols-2 md:items-end md:gap-12">
          <h2 id="toko-heading" className="section-heading">Kebutuhan harian sahabatmu.</h2>
          <p className="intro">Makan, bermain, dirawat, lalu istirahat. Jelajahi kategori kebutuhan dan siapkan pertanyaan stok sebelum berkunjung.</p>
        </div>

        <div className="grid items-start gap-x-6 gap-y-8 md:grid-cols-12 lg:gap-x-8">
          {categories.map((category) => (
            <article key={category.label} className={`min-w-0 ${category.className}`}>
              <img
                src={`${basePath}images/pets/${category.image}-640.webp`}
                srcSet={`${basePath}images/pets/${category.image}-640.webp 640w, ${basePath}images/pets/${category.image}-1280.webp 1280w`}
                sizes={category.image === "food" ? "(min-width: 768px) 560px, (min-width: 640px) 600px, calc(100vw - 48px)" : "(min-width: 768px) 280px, (min-width: 640px) 600px, calc(100vw - 48px)"}
                width={1280}
                height={960}
                loading="lazy"
                decoding="async"
                alt={category.alt}
                className={`photo aspect-[4/3] ${category.aspect}`}
              />
              <h3 className="mt-5 text-xl lg:text-2xl">{category.label}</h3>
              <p className="mb-3 mt-2 text-sm leading-relaxed text-muted">{category.description}</p>
              <a href={categoryHref(category.label)} className="text-link text-sm">Tanyakan stok {category.label.toLowerCase()}</a>
            </article>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-8 border-t border-border pt-9 md:grid-cols-12 lg:gap-10">
          <article className="min-w-0 md:col-span-5">
            <img
              src={`${basePath}images/pets/care-supplies-640.webp`}
              srcSet={`${basePath}images/pets/care-supplies-640.webp 640w, ${basePath}images/pets/care-supplies-1280.webp 1280w`}
              sizes="(min-width: 768px) 460px, (min-width: 640px) 600px, calc(100vw - 48px)"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              alt="Ilustrasi perlengkapan perawatan dengan shampoo, handuk, dan sikat"
              className="photo aspect-[4/3] md:aspect-[16/9]"
            />
            <h3 className="mt-5 text-xl lg:text-2xl">Perawatan</h3>
            <p className="mb-3 mt-2 text-sm leading-relaxed text-muted">Shampoo dan vitamin sesuai kebutuhan. Ceritakan kondisi serta alergi sahabatmu saat menanyakan pilihan.</p>
            <a href={categoryHref("Perawatan (shampoo, vitamin)")} className="text-link text-sm">Tanyakan stok perawatan</a>
          </article>

          <article className="min-w-0 rounded-xl bg-meadow p-6 md:col-span-3">
            <h3 className="text-xl lg:text-2xl">Aksesoris</h3>
            <p className="mb-5 mt-3 text-sm leading-relaxed">Kalung dan harness. Sampaikan jenis hewan serta ukuran agar tim bisa membantu menjelaskan pilihan yang sesuai.</p>
            <a href={categoryHref("Aksesoris (kalung, harness)")} className="text-link text-sm">Tanyakan stok aksesoris</a>
          </article>

          <article className="min-w-0 md:col-span-4">
            <img
              src={`${basePath}images/pets/dog-bed-640.webp`}
              srcSet={`${basePath}images/pets/dog-bed-640.webp 640w, ${basePath}images/pets/dog-bed-1280.webp 1280w`}
              sizes="(min-width: 768px) 370px, (min-width: 640px) 600px, calc(100vw - 48px)"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              alt="Ilustrasi tempat istirahat dan perlengkapan hewan"
              className="photo aspect-[4/3]"
            />
            <h3 className="mt-5 text-xl lg:text-2xl">Kandang & Tempat Tidur</h3>
            <p className="mb-3 mt-2 text-sm leading-relaxed text-muted">Pilih kebutuhan istirahat dengan mempertimbangkan ukuran dan kebiasaan sahabatmu.</p>
            <a href={categoryHref("Kandang & Tempat Tidur")} className="text-link text-sm">Tanyakan stok tempat istirahat</a>
          </article>
        </div>

        <p className="photo-caption mt-8 max-w-[90ch]">Semua foto adalah ilustrasi kategori, bukan katalog barang yang dijual atau bukti stok tersedia. Tautan kategori menyiapkan catatan pertanyaan di form kunjungan; stok, pilihan produk, dan harga perlu dikonfirmasi oleh tim.</p>
      </div>
    </section>
  );
}
