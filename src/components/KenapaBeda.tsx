const mechanisms = [
  {
    title: "Kenali dulu lewat Paspor Sahabat.",
    description: "Riwayat kesehatan, vaksin, makanan, alergi, dan kebiasaan kecil menjadi bekal untuk memahami kebutuhan masing-masing sahabat.",
    href: "#paspor",
    link: "Lihat contoh paspor",
  },
  {
    title: "Kucing dan anjing punya ruang sendiri.",
    description: "Pemisahan ruangan, jalur masuk, dan jadwal bermain membantu memberi ruang untuk yang pemalu maupun yang penuh energi.",
    href: "#zona",
    link: "Kenali pengaturan zona",
  },
  {
    title: "Akses kamera lewat link privat.",
    description: "Alur dalam PRD: link kamera area penitipan diberikan saat check-in. Bukan tayangan publik atau feed yang terhubung di halaman ini.",
    href: "#live-cctv",
    link: "Pahami proses akses",
  },
];

export default function KenapaBeda() {
  return (
    <section id="kenapa-beda" className="section bg-cream text-ink" aria-labelledby="care-heading">
      <div className="wrap grid items-start gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <figure className="lg:pt-2">
          <img
            src="/images/pets/first-groom-640.webp"
            srcSet="/images/pets/first-groom-640.webp 640w, /images/pets/first-groom-1280.webp 1280w"
            sizes="(min-width: 1024px) 46vw, 100vw"
            width={1280}
            height={960}
            loading="lazy"
            decoding="async"
            alt="Momen perawatan yang dekat dan penuh perhatian pada seekor anjing"
            className="photo aspect-[4/5] max-h-[600px]"
          />
          <figcaption className="photo-caption">Foto ilustrasi perawatan, bukan dokumentasi tim atau fasilitas Griya Sahabat.</figcaption>
        </figure>
        <div>
          <h2 id="care-heading" className="section-heading">Kami Paham Rasa Cemas Pet Parents.</h2>
          <p className="intro mt-5">Rasa tenang dimulai dari mengenali sahabatmu. Ini tiga hal yang perlu kamu pahami sebelum berkunjung.</p>
          <ul className="mt-8 divide-y divide-border">
            {mechanisms.map((mechanism) => (
              <li key={mechanism.href} className="py-6 first:pt-0 last:pb-0">
                <h3 className="max-w-[26ch] text-[23px] leading-snug text-leaf">{mechanism.title}</h3>
                <p className="mt-3 max-w-[58ch] leading-relaxed text-muted">{mechanism.description}</p>
                <a href={mechanism.href} className="text-link mt-3 inline-block">{mechanism.link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
