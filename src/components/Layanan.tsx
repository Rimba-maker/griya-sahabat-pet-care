const services = [
  {
    title: "Grooming & Spa",
    description: "Mandi, potong bulu, perawatan kuku, sampai spa relaksasi sesuai kebutuhan sahabatmu.",
    image: "grooming",
    alt: "Ilustrasi anjing mendapatkan perawatan grooming",
    href: "#grooming",
    action: "Lihat paket grooming",
  },
  {
    title: "Pet Hotel",
    description: "Rencanakan menginap dengan pilihan kamar sesuai ukuran dan kebutuhan hewan.",
    image: "resting-cat",
    alt: "Ilustrasi kucing yang sedang beristirahat",
    href: "#hotel",
    action: "Bandingkan kamar & tarif",
  },
  {
    title: "Pet Daycare",
    description: "Drop pagi, jemput sore. Bermain, bersosialisasi, dan makan sesuai jadwal selama kamu beraktivitas.",
    image: "play-dog",
    alt: "Ilustrasi anjing sedang bermain",
    href: "#daycare",
    action: "Lihat rencana harian",
  },
];

export default function Layanan() {
  return (
    <section id="layanan" className="section bg-cream text-ink" aria-labelledby="layanan-heading">
      <div className="wrap">
        <div className="mb-9 grid gap-5 md:grid-cols-2 md:items-end md:gap-12">
          <h2 id="layanan-heading" className="section-heading">Semua kebutuhan sahabatmu, satu tempat.</h2>
          <p className="intro">Dari kebutuhan sehari-hari sampai waktu menginap. Mulai dari yang sahabatmu perlukan, lalu kenali pilihan perawatannya.</p>
        </div>

        <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <article className="min-w-0">
            <figure>
              <img
                src="/images/pets/food-640.webp"
                srcSet="/images/pets/food-640.webp 640w, /images/pets/food-1280.webp 1280w"
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 600px, calc(100vw - 48px)"
                width={1280}
                height={960}
                loading="lazy"
                decoding="async"
                alt="Ilustrasi makanan untuk kebutuhan sehari-hari hewan"
                className="photo aspect-[4/3]"
              />
              <figcaption className="photo-caption">Foto ilustrasi kategori, bukan katalog atau stok toko.</figcaption>
            </figure>
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-2xl md:text-3xl">Pet Shop</h3>
              <a href="#toko" className="text-link">Jelajahi kebutuhan harian</a>
            </div>
            <p className="mt-3 max-w-[50ch] leading-relaxed text-muted">Makanan premium, snack, aksesoris, dan mainan — kurasi untuk berbagai jenis dan usia hewan. Tanyakan stok sebelum berkunjung.</p>
          </article>

          <div className="divide-y divide-border">
            {services.map((service, index) => (
              <article key={service.href} className={`grid min-w-0 grid-cols-[104px_minmax(0,1fr)] items-start gap-5 sm:grid-cols-[160px_minmax(0,1fr)] ${index === 0 ? "pb-6" : "py-6"}`}>
                <img
                  src={`/images/pets/${service.image}-640.webp`}
                  srcSet={`/images/pets/${service.image}-640.webp 640w, /images/pets/${service.image}-1280.webp 1280w`}
                  sizes="(min-width: 640px) 160px, 104px"
                  width={1280}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  alt={service.alt}
                  className="photo aspect-square sm:aspect-[4/3]"
                />
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl">{service.title}</h3>
                  <p className="mb-3 mt-2 text-sm leading-relaxed text-muted sm:text-base">{service.description}</p>
                  <a href={service.href} className="text-link text-sm sm:text-base">{service.action}</a>
                </div>
              </article>
            ))}
            <p className="pt-4 text-sm leading-relaxed text-muted">Foto perawatan, istirahat, dan bermain adalah ilustrasi; bukan dokumentasi fasilitas atau pelanggan Griya Sahabat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
