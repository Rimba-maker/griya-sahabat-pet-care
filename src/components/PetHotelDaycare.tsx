import { motion } from "framer-motion";
import Reveal, { staggerParent, griyaFade } from "./Reveal";
import { BuildingsIcon } from "@phosphor-icons/react/dist/csr/Buildings";
import { SunIcon } from "@phosphor-icons/react/dist/csr/Sun";
import { CatIcon } from "@phosphor-icons/react/dist/csr/Cat";
import { DogIcon } from "@phosphor-icons/react/dist/csr/Dog";

const rooms = [
  { title: "Kamar Standard", desc: "Kamar dasar, nyaman", cat: "Rp 85k/malam", dog: "Rp 120k/malam" },
  { title: "Kamar Deluxe", desc: "Lebih luas + mainan", cat: "Rp 130k/malam", dog: "Rp 175k/malam" },
  { title: "Kamar VIP", desc: "Private + AC individual", cat: "Rp 200k/malam", dog: "Rp 250k/malam" },
];

const daycare = [
  { title: "Daycare Reguler", price: "Rp 65k/hari", desc: "Bermain, sosialisasi, makan sesuai jadwal" },
  { title: "Paket Bulanan (20 hari)", price: "Rp 1.1 jt", desc: "Hemat dibanding harian" },
];

export default function PetHotelDaycare() {
  return (
    <section id="hotel" className="border-y border-border/70 bg-cream-alt">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Reveal>
          <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-ink md:mb-12 md:text-4xl text-balance">
            Menginap Atau Titip Harian.
          </h2>
        </Reveal>

        <div className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-teal-deep">
          <BuildingsIcon size={16} weight="bold" /> Pet Hotel (per malam)
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerParent}
          className="mb-14 grid gap-5 md:grid-cols-3"
        >
          {rooms.map((r) => (
            <motion.div key={r.title} variants={griyaFade} whileHover={{ y: -6 }} className="rounded-2xl bg-cream p-6 shadow-sm">
              <h3 className="mb-1 text-[17px] font-bold text-ink">{r.title}</h3>
              <p className="mb-4 text-[13.5px] text-ink-muted">{r.desc}</p>
              <div className="flex items-center justify-between rounded-lg bg-mint-tint px-3 py-2 text-sm">
                <span className="inline-flex items-center gap-1.5 text-ink-muted"><CatIcon size={16} weight="duotone" /> Kucing</span>
                <span className="font-bold text-teal-deep">{r.cat}</span>
              </div>
              <div className="mt-2 flex items-center justify-between rounded-lg bg-coral-tint px-3 py-2 text-sm">
                <span className="inline-flex items-center gap-1.5 text-ink-muted"><DogIcon size={16} weight="duotone" /> Anjing</span>
                <span className="font-bold text-teal-deep">{r.dog}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-teal-deep">
          <SunIcon size={16} weight="bold" /> Pet Daycare (per hari, drop 08.00–18.00)
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerParent}
          className="grid grid-cols-2 gap-4"
        >
          {daycare.map((d) => (
            <motion.div key={d.title} variants={griyaFade} whileHover={{ y: -6 }} className="rounded-2xl bg-cream p-4 shadow-sm md:p-6">
              <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-0">
                <h3 className="text-[15px] font-bold text-ink md:text-[17px]">{d.title}</h3>
                <span className="text-base font-extrabold text-teal-deep md:text-lg">{d.price}</span>
              </div>
              <p className="text-[13px] text-ink-muted md:text-[13.5px]">{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-ink-muted">
          Semua paket termasuk: makan sesuai jadwal, akses live CCTV, laporan harian singkat via WhatsApp
        </p>
      </div>
    </section>
  );
}
