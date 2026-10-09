import { bookingHref } from "../lib/booking";
import { basePath } from "../lib/site";

const tiers = [
  { title: "Basic Bath", price: "Rp 75k–150k", note: "Tergantung ukuran", description: "Mandi, keringkan, sisir, dan potong kuku dasar.", featured: false },
  { title: "Full Grooming", price: "Rp 150k–300k", note: "Pilihan unggulan", description: "Semua di Basic Bath, ditambah potong bulu sesuai gaya, bersih telinga, dan parfum.", featured: true },
  { title: "Spa Relaksasi", price: "Rp 250k–450k", note: "", description: "Full grooming, pijat relaksasi, masker bulu, dan aromaterapi khusus hewan yang stres atau cemas.", featured: false },
  { title: "Puppy/Kitten First Groom", price: "Rp 100k", note: "", description: "Sesi perkenalan lembut untuk hewan muda yang baru pertama kali digroom. Fokus membangun rasa nyaman.", featured: false },
];

export default function Grooming() {
  return (
    <section id="grooming" className="section bg-sky text-ink" aria-labelledby="grooming-heading">
      <div className="wrap grid items-start gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="min-w-0">
          <h2 id="grooming-heading" className="section-heading">Grooming sesuai kebutuhan.</h2>
          <p className="intro mb-7 mt-5">Ada yang butuh mandi, ada yang baru belajar nyaman dirawat. Pilih perawatan yang pas, ceritakan kebiasaannya kepada tim.</p>
          <figure>
            <img
              src={`${basePath}images/pets/grooming-640.webp`}
              srcSet={`${basePath}images/pets/grooming-640.webp 640w, ${basePath}images/pets/grooming-1280.webp 1280w`}
              sizes="(min-width: 1024px) 470px, (min-width: 640px) 600px, calc(100vw - 48px)"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              alt="Ilustrasi anjing dirawat dalam sesi grooming"
              className="photo aspect-[4/3]"
            />
            <figcaption className="photo-caption">Foto ilustrasi perawatan, bukan dokumentasi layanan Griya Sahabat.</figcaption>
          </figure>
          <p className="mt-5 max-w-[48ch] text-sm leading-relaxed text-muted">Sampaikan ukuran, kondisi bulu, alergi, dan hal yang membuat sahabatmu cemas. Tarif akhir serta jadwal perlu dikonfirmasi oleh tim sebelum kunjungan.</p>
        </div>

        <div className="min-w-0 space-y-1">
          {tiers.map((tier) => (
            <article key={tier.title} className={`px-5 py-6 sm:px-6 ${tier.featured ? "rounded-xl bg-meadow" : "border-b border-border"}`}>
              <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-2">
                <h3 className="max-w-[22ch] text-xl sm:text-2xl">{tier.title}</h3>
                <p className="shrink-0 text-lg font-bold tabular-nums">{tier.price}</p>
              </div>
              {tier.note && <p className={`mt-1 text-sm ${tier.featured ? "font-semibold text-leaf" : "text-muted"}`}>{tier.note}</p>}
              <p className="mb-4 mt-3 max-w-[62ch] text-sm leading-relaxed sm:text-base">{tier.description}</p>
              <a href={bookingHref("Grooming", tier.title)} className="text-link">Pilih {tier.title}</a>
            </article>
          ))}
          <p className="px-5 pt-5 text-sm leading-relaxed text-muted sm:px-6">Memilih paket menyiapkan permintaan booking, bukan mengonfirmasi slot secara otomatis.</p>
        </div>
      </div>
    </section>
  );
}
