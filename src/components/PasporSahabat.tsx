import { basePath } from "../lib/site";

const profiles = [
  {
    id: "milo",
    name: "Milo",
    type: "Anjing · Golden Retriever · 2 tahun",
    photo: "golden",
    alt: "Golden Retriever sebagai ilustrasi profil Milo",
    health: "Contoh: vaksin terakhir 12 Juni 2026. Tidak ada pengobatan rutin dalam catatan contoh; riwayat perlu dikonfirmasi dengan pet parent.",
    food: "Contoh: makanan kering dari rumah, pagi dan sore. Alergi ayam dicatat untuk dibicarakan dengan tim.",
    habits: "Contoh: ramah, suka bermain bola, perlu waktu tenang setelah bermain. Kurang nyaman dengan suara keras.",
    previous: "Contoh kunjungan grooming: lebih nyaman saat diajak berkenalan sebelum mandi; bawa mainan favorit pada kunjungan berikutnya.",
  },
  {
    id: "nala",
    name: "Nala",
    type: "Kucing · Anggora · 3 tahun",
    photo: "resting-cat",
    alt: "Kucing beristirahat sebagai ilustrasi profil Nala",
    health: "Contoh: vaksin terakhir 4 Mei 2026. Riwayat kulit sensitif dicatat; kebutuhan perawatan perlu dikonfirmasi dengan pet parent.",
    food: "Contoh: makanan basah dari rumah dalam porsi kecil. Belum ada alergi yang dicatat, bukan berarti sudah dipastikan bebas alergi.",
    habits: "Contoh: pemalu, suka tempat tenang, perlu pendekatan perlahan. Hindari mengangkat mendadak.",
    previous: "Contoh kunjungan grooming: beri waktu beradaptasi di carrier sebelum mulai; pet parent membawa selimut yang familiar.",
  },
];

export default function PasporSahabat() {
  return (
    <section id="paspor" className="section bg-meadow text-ink" aria-labelledby="passport-heading">
      <style>{`
        #paspor .passport-choice:has(input:checked) { background: #23573d; color: #fff7e6; border-color: #23573d; }
        #paspor .passport-choice:has(input:focus-visible) { outline: 3px solid #173e2d; outline-offset: 4px; }
        @supports selector(:has(input:checked)) {
          #paspor .passport-record { display: none; }
          #paspor fieldset:has(input[value="milo"]:checked) .passport-record[data-profile="milo"],
          #paspor fieldset:has(input[value="nala"]:checked) .passport-record[data-profile="nala"] { display: grid; }
        }
      `}</style>
      <div className="wrap grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <div className="lg:pt-6">
          <h2 id="passport-heading" className="section-heading">Setiap Sahabat Punya Paspornya Sendiri.</h2>
          <p className="intro mt-5">Bukan cuma nama dan jenis hewan. Kenali makanan yang cocok, riwayat kesehatan, dan cara membuatnya merasa nyaman.</p>
          <p className="mt-5 max-w-[50ch] leading-relaxed">Saat kunjungan pertama, ceritakan kebutuhan sahabatmu untuk dibahas bersama tim. Catatan kunjungan sebelumnya menjadi bagian penting dari konsep Paspor Sahabat.</p>
          <p id="passport-disclaimer" className="mt-6 max-w-[50ch] font-semibold leading-relaxed">Ini profil ilustrasi, bukan data hewan pelanggan. Pilihan di sini hanya mengganti contoh; tidak membuat atau menyimpan paspor permanen.</p>
          <a className="text-link mt-6 inline-block" href="#booking">Ceritakan kebutuhan sahabatmu</a>
        </div>
        <fieldset className="min-w-0 rounded-xl bg-cream p-5 sm:p-8" aria-describedby="passport-disclaimer">
          <legend className="sr-only">Pilih profil ilustrasi Paspor Sahabat</legend>
          <p className="mb-4 font-semibold text-leaf">Pilih contoh profil ilustrasi</p>
          <div className="mb-6 flex flex-wrap gap-3">
            {profiles.map((profile, index) => (
              <label key={profile.id} className="passport-choice inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border px-4 py-3 font-semibold">
                <input type="radio" name="paspor-contoh" value={profile.id} defaultChecked={index === 0} className="h-4 w-4 accent-leaf" aria-controls={`passport-${profile.id}`} />
                {profile.name} · {index === 0 ? "Anjing" : "Kucing"}
              </label>
            ))}
          </div>
          {profiles.map((profile) => (
            <article key={profile.id} id={`passport-${profile.id}`} data-profile={profile.id} className="passport-record grid gap-6" aria-labelledby={`passport-name-${profile.id}`}>
              <div className="grid items-center gap-5 sm:grid-cols-[140px_1fr]">
                <figure>
                  <img
                    src={`${basePath}images/pets/${profile.photo}-640.webp`}
                    srcSet={`${basePath}images/pets/${profile.photo}-640.webp 640w, ${basePath}images/pets/${profile.photo}-1280.webp 1280w`}
                    sizes="(min-width: 640px) 140px, 60vw"
                    width={1280}
                    height={960}
                    loading="lazy"
                    decoding="async"
                    alt={profile.alt}
                    className="photo aspect-square max-w-[180px]"
                  />
                  <figcaption className="photo-caption">Foto profil ilustrasi.</figcaption>
                </figure>
                <div>
                  <h3 id={`passport-name-${profile.id}`} className="text-3xl text-leaf">{profile.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{profile.type}</p>
                  <p className="mt-3 text-sm font-semibold text-leaf">Contoh Paspor Sahabat · bukan rekam medis</p>
                </div>
              </div>
              <dl className="divide-y divide-border">
                {[
                  ["Vaksin & kesehatan", profile.health],
                  ["Makanan & alergi", profile.food],
                  ["Kepribadian & kebiasaan", profile.habits],
                  ["Catatan kunjungan sebelumnya", profile.previous],
                ].map(([label, value]) => (
                  <div key={label} className="py-4 first:pt-0 last:pb-0">
                    <dt className="font-bold text-leaf">{label}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </fieldset>
      </div>
    </section>
  );
}
