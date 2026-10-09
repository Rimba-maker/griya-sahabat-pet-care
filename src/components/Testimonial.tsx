const testimonials = [
  { quote: "Anjing saya biasanya stres kalau dititip, tapi di sini dia malah kelihatan happy dari live cam. Zona terpisahnya kerasa banget efeknya.", name: "Dinda", role: "pemilik Golden Retriever" },
  { quote: "Paspor Sahabat-nya membantu banget — gak perlu jelasin ulang tiap kali kucing saya yang parno digroom. Tim udah tahu cara pendekatannya.", name: "Bara", role: "pemilik kucing anggora" },
  { quote: "Daycare bulanan jadi solusi buat saya yang kerja full day. Anjing saya excited tiap pagi diantar, artinya dia senang di sana.", name: "Fira", role: "working professional" },
];

export default function Testimonial() {
  return (
    <section id="cerita" className="section bg-cream text-ink" aria-labelledby="stories-heading">
      <style>{`
        #cerita .story-choice:has(input:checked) { background: #23573d; color: #fff7e6; border-color: #23573d; }
        #cerita .story-choice:has(input:focus-visible) { outline: 3px solid #173e2d; outline-offset: 4px; }
        @supports selector(:has(input:checked)) {
          #cerita .story-quote { display: none; }
          #cerita fieldset:has(input[value="0"]:checked) .story-quote[data-story="0"],
          #cerita fieldset:has(input[value="1"]:checked) .story-quote[data-story="1"],
          #cerita fieldset:has(input[value="2"]:checked) .story-quote[data-story="2"] { display: block; }
        }
      `}</style>
      <div className="wrap grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
        <div>
          <h2 id="stories-heading" className="section-heading">Kata Pet Parents Lainnya.</h2>
          <p id="stories-disclaimer" className="mt-5 font-semibold leading-relaxed text-leaf">Contoh cerita dari PRD, belum diverifikasi sebagai ulasan pelanggan nyata.</p>
          <p className="mt-3 leading-relaxed text-muted">Ketiga kutipan dipertahankan sesuai naskah PRD. Pilih nama untuk membaca; cerita tidak berganti otomatis.</p>
        </div>
        <fieldset className="min-w-0 border-t border-border pt-6" aria-describedby="stories-disclaimer stories-keyboard">
          <legend className="sr-only">Pilih contoh cerita pet parent dari PRD</legend>
          <div className="flex flex-wrap gap-3">
            {testimonials.map((testimonial, index) => (
              <label key={testimonial.name} className="story-choice inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border px-4 py-3 font-semibold">
                <input type="radio" name="cerita-prd" value={index} defaultChecked={index === 0} className="h-4 w-4 accent-leaf" aria-controls={`story-${index}`} />
                {testimonial.name}
              </label>
            ))}
          </div>
          <p id="stories-keyboard" className="mt-3 text-sm text-muted">Dengan keyboard, gunakan tombol panah pada pilihan nama.</p>
          <div className="mt-7 rounded-xl bg-sky p-6 sm:p-9">
            {testimonials.map((testimonial, index) => (
              <figure key={testimonial.name} id={`story-${index}`} data-story={index} className="story-quote">
                <blockquote className="max-w-[46ch] text-xl leading-relaxed sm:text-2xl">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption className="mt-7">
                  <span className="block font-bold text-leaf">{testimonial.name}</span>
                  <span className="mt-1 block text-sm text-muted">{testimonial.role}</span>
                  <span className="mt-3 block text-sm font-semibold text-leaf">Contoh dari PRD · menunggu verifikasi</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </fieldset>
      </div>
    </section>
  );
}
