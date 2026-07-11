import { motion } from "framer-motion";
import Reveal, { staggerParent, griyaFade } from "./Reveal";
import { ForkKnifeIcon } from "@phosphor-icons/react/dist/csr/ForkKnife";
import { BoneIcon } from "@phosphor-icons/react/dist/csr/Bone";
import { TagIcon } from "@phosphor-icons/react/dist/csr/Tag";
import { PuzzlePieceIcon } from "@phosphor-icons/react/dist/csr/PuzzlePiece";
import { SprayBottleIcon } from "@phosphor-icons/react/dist/csr/SprayBottle";
import { BedIcon } from "@phosphor-icons/react/dist/csr/Bed";

const categories = [
  { icon: ForkKnifeIcon, label: "Makanan Premium", tint: "bg-mint-tint", iconColor: "text-teal-deep" },
  { icon: BoneIcon, label: "Snack & Treats", tint: "bg-coral-tint", iconColor: "text-coral" },
  { icon: TagIcon, label: "Aksesoris (kalung, harness)", tint: "bg-teal-tint", iconColor: "text-teal-deep" },
  { icon: PuzzlePieceIcon, label: "Mainan", tint: "bg-mint-tint", iconColor: "text-teal-deep" },
  { icon: SprayBottleIcon, label: "Perawatan (shampoo, vitamin)", tint: "bg-coral-tint", iconColor: "text-coral" },
  { icon: BedIcon, label: "Kandang & Tempat Tidur", tint: "bg-teal-tint", iconColor: "text-teal-deep" },
];

export default function Toko() {
  return (
    <section id="toko" className="border-y border-border/70 bg-cream-alt">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Reveal>
          <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-ink md:mb-12 md:text-4xl text-balance">
            Kebutuhan Harian Sahabatmu.
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerParent}
          className="grid grid-cols-2 gap-3 lg:grid-cols-3"
        >
          {categories.map((c) => (
            <motion.div
              key={c.label}
              variants={griyaFade}
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-2xl bg-cream p-3.5 shadow-sm md:gap-4 md:p-5"
            >
              <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${c.tint} ${c.iconColor} md:h-11 md:w-11`}>
                <c.icon size={19} weight="duotone" />
              </div>
              <span className="text-[13.5px] font-semibold text-ink md:text-base">{c.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
