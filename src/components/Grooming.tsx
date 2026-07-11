import { motion } from "framer-motion";
import Reveal, { staggerParent, griyaFade } from "./Reveal";
import { DropIcon } from "@phosphor-icons/react/dist/csr/Drop";
import { SparkleIcon } from "@phosphor-icons/react/dist/csr/Sparkle";
import { FlowerIcon } from "@phosphor-icons/react/dist/csr/Flower";
import { CrownIcon } from "@phosphor-icons/react/dist/csr/Crown";
import { StarIcon } from "@phosphor-icons/react/dist/csr/Star";

const tiers = [
  { icon: DropIcon, title: "Basic Bath", price: "Rp 75k–150k", note: "tergantung ukuran", desc: "Mandi, keringkan, sisir, potong kuku dasar", popular: false },
  { icon: SparkleIcon, title: "Full Grooming", price: "Rp 150k–300k", note: null, desc: "Semua di Basic + potong bulu sesuai gaya, bersih telinga, parfum", popular: true },
  { icon: FlowerIcon, title: "Spa Relaksasi", price: "Rp 250k–450k", note: null, desc: "Full grooming + pijat relaksasi, masker bulu, aromaterapi khusus hewan (untuk yang stres/cemas)", popular: false },
  { icon: CrownIcon, title: "Puppy/Kitten First Groom", price: "Rp 100k", note: null, desc: "Sesi perkenalan lembut untuk hewan muda yang baru pertama kali digroom, fokus membangun rasa nyaman", popular: false },
];

export default function Grooming() {
  return (
    <section id="grooming" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <Reveal>
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-ink md:mb-12 md:text-4xl text-balance">
          Grooming Sesuai Kebutuhan.
        </h2>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerParent}
        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {tiers.map((t) => (
          <motion.div
            key={t.title}
            variants={griyaFade}
            whileHover={{ y: -6 }}
            className={`relative rounded-2xl border p-4 transition-shadow hover:shadow-lg md:p-6 ${
              t.popular ? "border-teal bg-teal-tint" : "border-border bg-cream-alt"
            }`}
          >
            {t.popular && (
              <motion.span
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-teal px-3 py-1 text-[11px] font-bold text-white shadow-sm"
              >
                <StarIcon size={11} weight="fill" /> Terpopuler
              </motion.span>
            )}
            <div className={`mb-3 ${t.popular ? "text-teal-deep" : "text-ink-muted"}`}>
              <t.icon size={30} weight="duotone" />
            </div>
            <h3 className="mb-1 text-[17px] font-bold text-ink">{t.title}</h3>
            <div className="mb-3 text-lg font-extrabold text-teal-deep">
              {t.price}
              {t.note && <span className="ml-1 text-xs font-medium text-ink-muted">({t.note})</span>}
            </div>
            <p className="text-[13.5px] leading-relaxed text-ink-muted">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
