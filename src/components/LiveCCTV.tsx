import { motion } from "framer-motion";
import Reveal from "./Reveal";

const cams = [
  { room: "Kamar Deluxe 01", zone: "Zona Kucing", pet: "Nala — Anggora" },
  { room: "Area Bermain", zone: "Zona Anjing", pet: "3 sahabat sedang bermain" },
  { room: "Kamar VIP 02", zone: "Zona Anjing", pet: "Kopi — Beagle" },
];

export default function LiveCCTV() {
  return (
    <section id="live-cctv" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
        <div>
          <Reveal>
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-ink md:text-4xl text-balance">
              Lihat Sahabatmu, Kapan Saja.
            </h2>
            <p className="mb-5 text-[16.5px] leading-relaxed text-ink-muted">
              Setiap area penitipan dilengkapi kamera live yang bisa diakses via link khusus yang
              kami kirim saat check-in. Tidak perlu install aplikasi ribet — buka link, lihat langsung.
            </p>
            <p className="text-sm italic text-ink-muted">
              "Privasi terjaga — hanya kamu yang mendapat akses ke link kamera area tempat sahabatmu berada."
            </p>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-[20px] border border-border bg-cream-alt p-3.5 shadow-lg"
        >
          <div className="mb-3 flex items-center justify-between px-1.5">
            <span className="inline-flex items-center gap-1.5 text-[11.5px] font-extrabold tracking-wide text-ring">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ring opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ring" />
              </span>
              LIVE MONITOR
            </span>
            <span className="text-[11px] text-ink-muted">griyasahabat.id/cam/••••</span>
          </div>

          <div className="grid gap-2.5">
            {cams.map((c) => (
              <div key={c.room} className="flex items-center justify-between rounded-xl bg-cream px-4 py-3">
                <div>
                  <div className="text-[13.5px] font-bold text-ink">{c.room}</div>
                  <div className="text-[12px] text-ink-muted">{c.pet}</div>
                </div>
                <span className="rounded-full bg-mint-tint px-2.5 py-1 text-[10.5px] font-bold text-teal-deep">
                  {c.zone}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
