import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const testimonials = [
  { quote: "Anjing saya biasanya stres kalau dititip, tapi di sini dia malah kelihatan happy dari live cam. Zona terpisahnya kerasa banget efeknya.", name: "Dinda", role: "pemilik Golden Retriever" },
  { quote: "Paspor Sahabat-nya membantu banget — gak perlu jelasin ulang tiap kali kucing saya yang parno digroom. Tim udah tahu cara pendekatannya.", name: "Bara", role: "pemilik kucing anggora" },
  { quote: "Daycare bulanan jadi solusi buat saya yang kerja full day. Anjing saya excited tiap pagi diantar, artinya dia senang di sana.", name: "Fira", role: "working professional" },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 8000);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section className="mx-auto max-w-3xl px-6 py-14 md:py-20">
      <Reveal>
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-ink md:mb-12 md:text-4xl text-balance">
          Kata Pet Parents Lainnya.
        </h2>
      </Reveal>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative min-h-[210px] rounded-2xl border border-border bg-cream-alt p-8 md:p-10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-6 text-[17px] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-teal-tint text-sm font-bold text-teal-deep">
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-bold text-ink">{t.name}</div>
                <div className="text-xs text-ink-muted">{t.role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-7 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Testimoni ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-teal" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
