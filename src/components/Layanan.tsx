import { motion } from "framer-motion";
import Reveal, { staggerParent, griyaFade } from "./Reveal";
import { ShoppingBagIcon } from "@phosphor-icons/react/dist/csr/ShoppingBag";
import { ScissorsIcon } from "@phosphor-icons/react/dist/csr/Scissors";
import { BuildingsIcon } from "@phosphor-icons/react/dist/csr/Buildings";
import { SunIcon } from "@phosphor-icons/react/dist/csr/Sun";

const services = [
  { icon: ShoppingBagIcon, tint: "bg-mint-tint", iconColor: "text-teal-deep", title: "Pet Shop", desc: "Makanan premium, snack, aksesoris, mainan — kurasi untuk berbagai jenis dan usia hewan." },
  { icon: ScissorsIcon, tint: "bg-coral-tint", iconColor: "text-coral", title: "Grooming & Spa", desc: "Mandi, potong bulu, perawatan kuku, sampai spa relaksasi untuk hewan yang stres." },
  { icon: BuildingsIcon, tint: "bg-teal-tint", iconColor: "text-teal-deep", title: "Pet Hotel", desc: "Penitipan menginap dengan kamar sesuai ukuran & kepribadian hewan, dilengkapi live CCTV." },
  { icon: SunIcon, tint: "bg-mint-tint", iconColor: "text-teal-deep", title: "Pet Daycare", desc: "Penitipan harian untuk yang kerja seharian — drop pagi, jemput sore, hewan tetap aktif bermain." },
];

export default function Layanan() {
  return (
    <section id="layanan" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <Reveal>
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-ink md:mb-12 md:text-4xl text-balance">
          Semua Kebutuhan Sahabatmu, Satu Tempat.
        </h2>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerParent}
        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={griyaFade}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-border bg-cream-alt p-4 transition-shadow hover:shadow-lg md:p-6"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: -6 }}
              className={`mb-4 grid h-12 w-12 place-items-center rounded-xl ${s.tint} ${s.iconColor}`}
            >
              <s.icon size={24} weight="duotone" />
            </motion.div>
            <h3 className="mb-2 text-lg font-bold text-ink">{s.title}</h3>
            <p className="text-[14.5px] leading-relaxed text-ink-muted">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
