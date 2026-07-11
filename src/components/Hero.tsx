import { motion } from "framer-motion";
import { staggerParent, griyaFade } from "./Reveal";
import { HouseIcon } from "@phosphor-icons/react/dist/csr/House";
import { PawPrintIcon } from "@phosphor-icons/react/dist/csr/PawPrint";
import { StethoscopeIcon } from "@phosphor-icons/react/dist/csr/Stethoscope";
import { IdentificationCardIcon } from "@phosphor-icons/react/dist/csr/IdentificationCard";
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";

const badges = [
  { icon: HouseIcon, label: <><b className="font-extrabold text-teal-deep">500+</b> Sahabat Sudah Menginap</> },
  { icon: PawPrintIcon, label: "Zona Terpisah Kucing & Anjing" },
  { icon: StethoscopeIcon, label: "Dokter Hewan On-Call" },
];

export default function Hero() {
  return (
    <section id="hero" className="mx-auto grid max-w-6xl gap-10 px-6 pb-10 pt-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14 md:pb-16 md:pt-20">
      <motion.div initial="hidden" animate="visible" variants={staggerParent}>
        <motion.div
          variants={griyaFade}
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-teal-tint px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-deep"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ring opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ring" />
          </span>
          Live CCTV 24 Jam — Selalu Bisa Dilihat
        </motion.div>

        <motion.h1
          variants={griyaFade}
          className="mb-5 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-ink text-balance md:text-[3.2rem]"
        >
          Saat Kamu Pergi,
          <br />
          Sahabatmu Tetap <span className="text-teal-deep">Merasa Di Rumah.</span>
        </motion.h1>

        <motion.p variants={griyaFade} className="mb-8 max-w-[46ch] text-[17.5px] leading-relaxed text-ink-muted">
          Pet shop, grooming, hotel, dan daycare dalam satu tempat. Dilengkapi live CCTV supaya kamu
          bisa lihat anabulmu kapan saja, dan zona terpisah kucing-anjing supaya semua tetap tenang.
        </motion.p>

        <motion.div variants={griyaFade} className="mb-9 flex flex-wrap gap-3.5">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-[10px] bg-teal px-6 py-3.5 text-[15px] font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Booking Sekarang →
          </a>
          <a
            href="#live-cctv"
            className="inline-flex items-center gap-2 rounded-[10px] border border-border px-6 py-3.5 text-[15px] font-bold text-ink transition-colors hover:bg-cream-alt"
          >
            <span className="h-2 w-2 rounded-full bg-ring" />
            Lihat Live Cam
          </a>
        </motion.div>

        <motion.div variants={griyaFade} className="flex flex-wrap gap-2.5">
          {badges.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-cream-alt px-3.5 py-2 text-[12.5px] font-semibold text-ink"
            >
              <b.icon size={15} weight="bold" className="text-teal-deep" /> {b.label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="relative"
      >
        <div className="rounded-[20px] border border-border bg-cream-alt p-3.5 shadow-lg">
          <div className="flex items-center justify-between px-1.5 pb-3">
            <span className="inline-flex items-center gap-1.5 text-[11.5px] font-extrabold tracking-wide text-ring">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ring opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ring" />
              </span>
              LIVE — KAMAR DELUXE 03
            </span>
            <span className="rounded-full bg-mint-tint px-2.5 py-1 text-[11px] font-bold text-ink-muted">
              Zona Anjing
            </span>
          </div>

          <div
            className="relative h-[300px] overflow-hidden rounded-[13px] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(22,132,126,0) 55%, rgba(22,132,126,0.35) 100%), url('https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop')",
            }}
          >
            <div className="absolute bottom-3 left-3.5 text-[13px] font-bold text-white drop-shadow">
              Milo — Golden Retriever
              <span className="block text-[11.5px] font-medium opacity-85">Sedang bermain di taman dalam</span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-7 -right-4 w-52 rounded-[14px] border border-border bg-cream-alt p-3.5 shadow-lg">
          <div className="mb-2.5 flex items-center gap-2.5">
            <div className="grid h-[34px] w-[34px] place-items-center rounded-[9px] bg-coral-tint text-coral">
              <IdentificationCardIcon size={18} weight="duotone" />
            </div>
            <div>
              <div className="text-[13.5px] font-extrabold leading-tight text-ink">Paspor Sahabat</div>
              <div className="text-[11px] text-ink-muted">Milo · Golden Retriever</div>
            </div>
          </div>
          <div className="space-y-1 text-[11.5px] text-ink-muted">
            <div className="flex items-center gap-1.5"><CheckIcon size={12} weight="bold" className="text-teal-deep shrink-0" /> Vaksin lengkap — Jan 2026</div>
            <div className="flex items-center gap-1.5"><CheckIcon size={12} weight="bold" className="text-teal-deep shrink-0" /> Tidak ada alergi makanan</div>
            <div className="flex items-center gap-1.5"><CheckIcon size={12} weight="bold" className="text-teal-deep shrink-0" /> Ramah, sedikit cemas suara keras</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
