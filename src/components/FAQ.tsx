import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const faqs = [
  { q: "Apakah bisa lihat live CCTV dari HP?", a: "Bisa, kami kirim link akses saat check-in, tidak perlu install aplikasi." },
  { q: "Apakah kucing dan anjing benar-benar terpisah total?", a: "Ya, ruangan, jalur masuk, dan jadwal main terpisah sepenuhnya." },
  { q: "Bagaimana kalau hewan saya sedang sakit/dalam pengobatan?", a: "Informasikan di Paspor Sahabat, kami koordinasikan dengan dokter hewan on-call untuk penanganan khusus." },
  { q: "Apakah bisa titip untuk hewan selain kucing/anjing?", a: "Bisa untuk hewan kecil lain (kelinci, hamster) — hubungi kami untuk konfirmasi ketersediaan kandang." },
  { q: "Apakah ada dokter hewan standby?", a: "Dokter hewan on-call, siap dihubungi jika ada kondisi darurat selama penitipan." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-14 md:py-20">
      <Reveal>
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-ink md:mb-12 md:text-4xl text-balance">
          Pertanyaan Umum.
        </h2>
      </Reveal>

      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-xl border border-border bg-cream-alt">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-[15px] font-bold text-ink">{f.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className="shrink-0 text-xl leading-none text-teal-deep"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-[14.5px] leading-relaxed text-ink-muted">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
