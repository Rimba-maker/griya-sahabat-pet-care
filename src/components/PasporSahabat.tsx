import { motion } from "framer-motion";
import { staggerParent, griyaFade } from "./Reveal";
import { PawPrintIcon } from "@phosphor-icons/react/dist/csr/PawPrint";
import { DogIcon } from "@phosphor-icons/react/dist/csr/Dog";
import { SyringeIcon } from "@phosphor-icons/react/dist/csr/Syringe";
import { BoneIcon } from "@phosphor-icons/react/dist/csr/Bone";
import { CatIcon } from "@phosphor-icons/react/dist/csr/Cat";
import { CameraIcon } from "@phosphor-icons/react/dist/csr/Camera";
import { NotePencilIcon } from "@phosphor-icons/react/dist/csr/NotePencil";

const items = [
  { icon: SyringeIcon, label: "Riwayat vaksin & kesehatan" },
  { icon: BoneIcon, label: "Preferensi & alergi makanan" },
  { icon: CatIcon, label: "Catatan kepribadian & kebiasaan" },
  { icon: CameraIcon, label: "Foto profil resmi" },
  { icon: NotePencilIcon, label: "Catatan khusus dari kunjungan sebelumnya" },
];

export default function PasporSahabat() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
        <motion.div
          initial={{ opacity: 0, rotateY: -8, scale: 0.96 }}
          whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-[22px] border border-border bg-gradient-to-br from-teal to-teal-deep p-8 text-cream shadow-lg"
          style={{ perspective: 1000 }}
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.15em] opacity-80">Paspor Sahabat</span>
            <PawPrintIcon size={26} weight="fill" />
          </div>
          <div className="mb-6 flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-xl bg-white/15"><DogIcon size={32} weight="duotone" /></div>
            <div>
              <div className="text-lg font-extrabold">Milo</div>
              <div className="text-sm opacity-80">Golden Retriever · 2 tahun</div>
            </div>
          </div>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerParent}
            className="space-y-2.5 border-t border-white/20 pt-5"
          >
            {items.map((it) => (
              <motion.li key={it.label} variants={griyaFade} className="flex items-center gap-2.5 text-sm">
                <it.icon size={17} weight="bold" />
                <span className="opacity-90">{it.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <div>
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-ink md:text-4xl text-balance">
            Setiap Sahabat Punya Paspornya Sendiri.
          </h2>
          <p className="text-[16.5px] leading-relaxed text-ink-muted">
            Saat kunjungan pertama, kami buatkan profil lengkap untuk hewanmu — mulai dari riwayat
            kesehatan, vaksin terakhir, alergi makanan, sampai kepribadian (pemalu? ramah? takut
            suara keras?). Profil ini tersimpan permanen, jadi setiap kali kamu booking grooming
            atau hotel, tim kami sudah tahu persis cara memperlakukan sahabatmu.
          </p>
        </div>
      </div>
    </section>
  );
}
