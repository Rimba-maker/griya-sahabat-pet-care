import { bookingHref } from "../lib/booking";

const rooms = [
  { title: "Kamar Standard", description: "Kamar dasar, nyaman", cat: "Rp 85k", dog: "Rp 120k", dogSize: "Anjing kecil–sedang" },
  { title: "Kamar Deluxe", description: "Lebih luas + mainan", cat: "Rp 130k", dog: "Rp 175k", dogSize: "Anjing" },
  { title: "Kamar VIP", description: "Private + AC individual", cat: "Rp 200k", dog: "Rp 250k", dogSize: "Anjing besar" },
];

const daycare = [
  { title: "Daycare Reguler", price: "Rp 65k", unit: "/hari", description: "Bermain, sosialisasi, dan makan sesuai jadwal." },
  { title: "Paket Bulanan (20 hari)", price: "Rp 1.1 jt", unit: "/20 hari", description: "Untuk rencana rutin. Hemat dibanding tarif harian." },
];

export default function PetHotelDaycare() {
  return (
    <>
      <section id="hotel" className="section bg-leaf text-cream" aria-labelledby="hotel-heading">
        <div className="wrap">
          <div className="mb-9 grid gap-5 md:grid-cols-2 md:items-end md:gap-12">
            <h2 id="hotel-heading" className="section-heading text-cream">Menginap atau titip harian.</h2>
            <p className="max-w-[54ch] text-base leading-relaxed text-cream md:text-lg">Pilih kamar untuk bermalam, atau <a href="#daycare" className="underline decoration-meadow underline-offset-4 hover:decoration-cream">rencana daycare</a> saat kamu beraktivitas. Ukuran dan kebutuhan sahabatmu jadi bagian dari rencana.</p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
            <figure className="min-w-0">
              <img
                src="/images/pets/resting-cat-640.webp"
                srcSet="/images/pets/resting-cat-640.webp 640w, /images/pets/resting-cat-1280.webp 1280w"
                sizes="(min-width: 1024px) 370px, (min-width: 640px) 600px, calc(100vw - 48px)"
                width={1280}
                height={960}
                loading="lazy"
                decoding="async"
                alt="Ilustrasi kucing beristirahat dengan tenang"
                className="photo aspect-[4/3] lg:aspect-[4/5]"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-cream">Foto ilustrasi istirahat, bukan foto kamar hotel Griya Sahabat.</figcaption>
              <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-cream">Pilihan kamar dan fasilitas mengikuti PRD. Konfirmasikan kesesuaian ukuran, fasilitas, tarif akhir, dan ketersediaan sebelum menginap.</p>
            </figure>

            <div className="min-w-0">
              <h3 className="mb-2 text-2xl text-cream">Pet Hotel</h3>
              <p className="mb-5 text-sm text-cream">Tarif per malam · pilih kamar dan jenis sahabatmu</p>
              <div className="divide-y divide-cream/30 border-y border-cream/30">
                {rooms.map((room) => (
                  <article key={room.title} className="grid min-w-0 gap-4 py-6 sm:grid-cols-[1.1fr_1fr_1fr] sm:gap-5">
                    <div>
                      <h3 className="text-xl text-cream">{room.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream">{room.description}</p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm">Kucing</p>
                      <p className="mb-3 mt-1 font-bold tabular-nums"><span className="text-xl">{room.cat}</span><span className="text-sm font-normal">/malam</span></p>
                      <a href={bookingHref("Hotel", room.title, "Kucing")} className="inline-flex min-h-11 items-center text-sm font-semibold text-cream underline decoration-meadow underline-offset-4 hover:decoration-cream">Pilih untuk kucing</a>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm">{room.dogSize}</p>
                      <p className="mb-3 mt-1 font-bold tabular-nums"><span className="text-xl">{room.dog}</span><span className="text-sm font-normal">/malam</span></p>
                      <a href={bookingHref("Hotel", room.title, "Anjing")} className="inline-flex min-h-11 items-center text-sm font-semibold text-cream underline decoration-meadow underline-offset-4 hover:decoration-cream">Pilih untuk anjing</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-9 max-w-[88ch] text-sm leading-relaxed text-cream">Rencana paket mencakup makan sesuai jadwal, laporan harian singkat via WhatsApp, dan akses CCTV melalui link saat check-in. Konfirmasikan pelaksanaannya dengan tim; halaman ini tidak terhubung ke kamera atau sistem reservasi.</p>
        </div>
      </section>

      <section id="daycare" className="section bg-meadow text-ink" aria-labelledby="daycare-heading">
        <div className="wrap grid items-center gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="min-w-0">
            <h2 id="daycare-heading" className="section-heading">Pagi bermain. Sore pulang.</h2>
            <p className="intro mb-3 mt-5">Pet Daycare untuk menemani hari sahabatmu saat kamu beraktivitas.</p>
            <p className="mb-7 font-semibold">Rencana drop & jemput 08.00–18.00</p>
            <div className="divide-y divide-leaf/40 border-y border-leaf/40">
              {daycare.map((plan) => (
                <article key={plan.title} className="py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl sm:text-2xl">{plan.title}</h3>
                    <p className="font-bold tabular-nums"><span className="text-2xl">{plan.price}</span><span className="text-sm font-normal">{plan.unit}</span></p>
                  </div>
                  <p className="mb-4 mt-3 leading-relaxed">{plan.description}</p>
                  <a href={bookingHref("Daycare", plan.title)} className="text-link">Pilih {plan.title}</a>
                </article>
              ))}
            </div>
            <p className="mt-5 max-w-[62ch] text-sm leading-relaxed">Jadwal 08.00–18.00 adalah rencana layanan pada PRD, bukan jam operasional terverifikasi. Konfirmasikan jadwal, tarif akhir, ketersediaan, dan kebutuhan makan sebelum datang.</p>
          </div>
          <figure className="min-w-0">
            <img
              src="/images/pets/play-dog-640.webp"
              srcSet="/images/pets/play-dog-640.webp 640w, /images/pets/play-dog-1280.webp 1280w"
              sizes="(min-width: 1024px) 470px, (min-width: 640px) 600px, calc(100vw - 48px)"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              alt="Ilustrasi anjing bermain dengan mainan berwarna-warni"
              className="photo aspect-[4/3]"
            />
            <figcaption className="photo-caption">Foto ilustrasi bermain, bukan dokumentasi peserta atau area daycare.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
