import { motion } from "framer-motion";
import Reveal, { staggerParent, griyaFade } from "./Reveal";
import { VideoCameraIcon } from "@phosphor-icons/react/dist/csr/VideoCamera";
import { IdentificationCardIcon } from "@phosphor-icons/react/dist/csr/IdentificationCard";
import { PawPrintIcon } from "@phosphor-icons/react/dist/csr/PawPrint";

const pilars = [
  { icon: VideoCameraIcon, title: "Live CCTV, Bukan Sekadar Janji", desc: "Kamu bisa buka aplikasi kapan saja dan lihat langsung apa yang sedang dilakukan sahabatmu — bukan cuma update foto sesekali." },
  { icon: IdentificationCardIcon, title: "Paspor Sahabat Tersimpan Selamanya", desc: "Riwayat vaksin, alergi, kepribadian, dan preferensi makanan tersimpan di sistem kami — tidak perlu jelaskan ulang tiap kunjungan." },
  { icon: PawPrintIcon, title: "Zona Terpisah, Semua Tenang", desc: "Area kucing dan anjing dipisah total — kucing tidak stres dengan gonggongan, anjing tidak terganggu kucing yang waspada." },
];

export default function KenapaBeda() {
  return (
    <section className="border-y border-border/70 bg-cream-alt">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Reveal>
          <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-ink md:mb-12 md:text-4xl text-balance">
            Kami Paham Rasa Cemas Pet Parents.
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerParent}
          className="grid gap-6 md:grid-cols-3"
        >
          {pilars.map((p) => (
            <motion.div key={p.title} variants={griyaFade} className="rounded-2xl bg-cream p-7 text-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-teal-tint text-teal-deep"
              >
                <p.icon size={26} weight="duotone" />
              </motion.div>
              <h3 className="mb-2 text-[17px] font-bold text-ink">{p.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-ink-muted">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
