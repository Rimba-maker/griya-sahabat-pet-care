import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const WHATSAPP_NUMBER = "6281234567890";

const layananOptions = ["Grooming", "Hotel", "Daycare"];

export default function CTABooking() {
  const [form, setForm] = useState({
    nama: "",
    jenisHewan: "",
    layanan: layananOptions[0],
    tanggal: "",
    catatan: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = [
      `Halo Griya Sahabat, saya mau booking:`,
      `Nama: ${form.nama}`,
      `Jenis Hewan: ${form.jenisHewan}`,
      `Layanan: ${form.layanan}`,
      `Tanggal: ${form.tanggal}`,
      form.catatan && `Catatan: ${form.catatan}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-cream px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/70 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal-tint";

  return (
    <section id="booking" className="border-y border-border/70 bg-cream-alt">
      <div className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <Reveal>
          <h2 className="mb-3 text-center text-3xl font-extrabold tracking-tight text-ink md:text-4xl text-balance">
            Titipkan Sahabatmu Dengan Tenang.
          </h2>
          <p className="mb-8 text-center text-[15px] text-ink-muted md:mb-10">
            Isi form di bawah, kami lanjutkan konfirmasi via WhatsApp.
          </p>
        </Reveal>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-border bg-cream p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">Nama</label>
              <input required value={form.nama} onChange={(e) => update("nama", e.target.value)} className={inputClass} placeholder="Nama kamu" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">Jenis Hewan</label>
              <input required value={form.jenisHewan} onChange={(e) => update("jenisHewan", e.target.value)} className={inputClass} placeholder="Kucing, anjing, dll" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">Layanan</label>
              <select value={form.layanan} onChange={(e) => update("layanan", e.target.value)} className={inputClass}>
                {layananOptions.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">Tanggal</label>
              <input required type="date" value={form.tanggal} onChange={(e) => update("tanggal", e.target.value)} className={inputClass} />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink">Catatan Khusus</label>
            <textarea value={form.catatan} onChange={(e) => update("catatan", e.target.value)} rows={3} className={inputClass} placeholder="Opsional" />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-lg bg-teal px-6 py-3.5 text-[15px] font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Booking Sekarang
          </button>
        </form>
      </div>
    </section>
  );
}
