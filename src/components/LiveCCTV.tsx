import { basePath } from "../lib/site";

const accessSteps = [
  {
    title: "Tanyakan sebelum berkunjung.",
    description: "Konfirmasikan ketersediaan akses CCTV untuk layanan dan area penitipan yang kamu pilih, termasuk waktu aksesnya.",
  },
  {
    title: "Terima link privat saat check-in.",
    description: "Menurut alur dalam PRD, tim memberikan link khusus kamera area tempat sahabatmu berada kepada pet parent. Link bukan untuk dibagikan secara publik.",
  },
  {
    title: "Buka dari HP, lalu cek bersama tim.",
    description: "Alur yang direncanakan tidak memerlukan instalasi aplikasi. Pastikan link bisa dibuka saat check-in; jika bermasalah, minta tim mengecek aksesnya.",
  },
];

export default function LiveCCTV() {
  return (
    <section id="live-cctv" className="section bg-sky text-ink" aria-labelledby="camera-heading">
      <div className="wrap grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2 id="camera-heading" className="section-heading">Dekat lewat akses kamera privat.</h2>
          <p className="intro mt-5">Bukan kamera publik. Pahami cara mendapat dan mengecek link untuk sahabatmu sebelum mulai menginap.</p>
          <ol className="mt-8 list-decimal space-y-6 pl-6 marker:font-bold marker:text-leaf">
            {accessSteps.map((step) => (
              <li key={step.title} className="pl-2">
                <h3 className="text-[21px] leading-snug text-leaf">{step.title}</h3>
                <p className="mt-2 max-w-[58ch] leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
          <a href="#booking" className="button mt-8 inline-flex">Bahas akses untuk kunjunganmu</a>
        </div>
        <div className="lg:pt-3">
          <figure>
            <img
              src={`${basePath}images/pets/cat-parent-640.webp`}
              srcSet={`${basePath}images/pets/cat-parent-640.webp 640w, ${basePath}images/pets/cat-parent-1280.webp 1280w`}
              sizes="(min-width: 1024px) 43vw, 100vw"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              alt="Pet parent berinteraksi dengan kucing, sebagai ilustrasi kedekatan"
              className="photo aspect-[4/5] max-h-[540px]"
            />
            <figcaption className="photo-caption">Foto ilustrasi pet parent, bukan pelanggan Griya Sahabat atau tayangan CCTV.</figcaption>
          </figure>
          <p className="mt-5 font-semibold leading-relaxed text-leaf">Halaman ini tidak terhubung ke feed kamera. Ketersediaan, jam akses, dan pengaturan privasi operasional masih perlu dikonfirmasi dengan tim.</p>
        </div>
      </div>
    </section>
  );
}
