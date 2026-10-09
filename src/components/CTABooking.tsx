import { useEffect, useRef, useState, type SubmitEvent } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { CopyIcon } from "@phosphor-icons/react/dist/csr/Copy";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/csr/WhatsappLogo";
import { careNote, civilDate, localToday, requestErrors, requestMessage, services, whatsappUrl, type Service, type VisitRequest, type RequestErrors } from "../lib/booking";
import { basePath } from "../lib/site";

const empty: VisitRequest = { nama: "", whatsapp: "", hewan: "", layanan: "Grooming", paket: "", tanggal: "", checkout: "", catatan: "" };
const contact = import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? "";

export default function CTABooking() {
  const [form, setForm] = useState<VisitRequest>(empty);
  const [errors, setErrors] = useState<RequestErrors>({});
  const [ready, setReady] = useState(false);
  const [today, setToday] = useState("");
  const [message, setMessage] = useState("");
  const [prepared, setPrepared] = useState(false);
  const [copying, setCopying] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const requestText = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("layanan") as Service;
    const pet = params.get("hewan") ?? "";
    setForm({ ...empty,
      layanan: services.includes(service) ? service : "Grooming",
      hewan: ["Kucing", "Anjing", "Hewan lain"].includes(pet) ? pet : "",
      paket: params.get("paket") ?? "",
      tanggal: civilDate(params.get("tanggal") ?? "") ? params.get("tanggal")! : "",
      catatan: params.get("catatan") ?? "",
    });
    setToday(localToday());
    setReady(true);
  }, []);

  function update(key: keyof VisitRequest, value: string) {
    setForm((current) => ({ ...current, [key]: value, ...(key === "layanan" ? { paket: "", checkout: "" } : {}) }));
    setErrors((current) => { const next = { ...current }; delete next[key]; return next; });
    setMessage("");
    setPrepared(false);
    setCopyStatus("");
  }

  function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const problems = requestErrors(form);
    setErrors(problems);
    const first = Object.keys(problems)[0];
    if (first) {
      (event.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setMessage(requestMessage(form));
    setPrepared(true);
    setCopyStatus("");
  }

  useEffect(() => { if (prepared) resultHeading.current?.focus(); }, [prepared]);

  async function copy() {
    setCopying(true);
    try {
      await navigator.clipboard.writeText(message);
      setCopyStatus("Permintaan tersalin. Booking belum dikonfirmasi oleh tim.");
    } catch {
      requestText.current?.focus();
      requestText.current?.select();
      setCopyStatus("Clipboard tidak tersedia. Teks sudah dipilih; salin manual dengan Ctrl/Cmd+C.");
    } finally {
      setCopying(false);
    }
  }

  const link = message.trim() ? whatsappUrl(contact, message) : null;
  const nextDate = civilDate(form.tanggal);
  if (nextDate) nextDate.setDate(nextDate.getDate() + 1);
  const checkoutMin = nextDate ? localToday(nextDate) : today;

  return <section id="booking" className="section bg-meadow">
    <div className="wrap booking-layout">
      <div>
        <h2 className="section-heading">Titipkan Sahabatmu Dengan Tenang.</h2>
        <p className="mt-5 max-w-[42ch] text-[16px]">Kenalkan sahabatmu, ceritakan kebutuhannya, lalu siapkan rencana kunjungan. Hal-hal kecilnya penting buat kami.</p>
        <figure className="mt-8 max-w-[340px]">
          <img className="photo" src={`${basePath}images/pets/rabbit-640.webp`} srcSet={`${basePath}images/pets/rabbit-640.webp 640w, ${basePath}images/pets/rabbit-1280.webp 1280w`} sizes="(max-width:767px) 88vw,340px" width="640" height="480" loading="lazy" decoding="async" alt="Kelinci lop beristirahat di rumput hijau" />
          <figcaption className="photo-caption !text-ink">Sahabat selain kucing dan anjing? Kesesuaian layanan dikonfirmasi lebih dulu. Foto ilustrasi Pexels.</figcaption>
        </figure>
        <p className="mt-7 max-w-[42ch] text-[13px] leading-relaxed">Permintaan ini bukan konfirmasi reservasi. Slot, kebutuhan khusus, dan tarif final perlu dibicarakan dengan tim.</p>
      </div>
      <div className="booking-form">
        <form onSubmit={submit} noValidate method="post">
          <fieldset disabled={!ready} className="booking-fields">
            <legend className="sr-only">Detail rencana kunjungan</legend>
            {([{ key: "nama", label: "Nama kamu", placeholder: "Nama pet parent", type: "text", autocomplete: "name" }, { key: "whatsapp", label: "Nomor WhatsApp", placeholder: "08… atau +62…", type: "tel", autocomplete: "tel" }] as const).map((field) => <div className="field" key={field.key}>
              <label htmlFor={`booking-${field.key}`}>{field.label}</label>
              <input id={`booking-${field.key}`} name={field.key} required type={field.type} autoComplete={field.autocomplete} maxLength={field.key === "nama" ? 100 : 22} value={form[field.key]} onChange={(event) => update(field.key, event.target.value)} placeholder={field.placeholder} aria-invalid={errors[field.key] ? true : undefined} aria-describedby={errors[field.key] ? `${field.key}-error` : undefined} />
              {errors[field.key] ? <p id={`${field.key}-error`} className="form-error" role="alert">{errors[field.key]}</p> : null}
            </div>)}
            <div className="field">
              <label htmlFor="booking-hewan">Jenis sahabatmu</label>
              <select id="booking-hewan" name="hewan" required value={form.hewan} onChange={(event) => update("hewan", event.target.value)} aria-invalid={errors.hewan ? true : undefined} aria-describedby={errors.hewan ? "hewan-error" : undefined}>
                <option value="">Pilih jenis hewan</option><option>Kucing</option><option>Anjing</option><option>Hewan lain</option>
              </select>
              {errors.hewan ? <p id="hewan-error" className="form-error" role="alert">{errors.hewan}</p> : null}
            </div>
            <div className="field">
              <label htmlFor="booking-layanan">Layanan</label>
              <select id="booking-layanan" name="layanan" value={form.layanan} onChange={(event) => update("layanan", event.target.value)}>
                {services.map((service) => <option key={service} value={service}>{service === "Hotel" ? "Pet Hotel" : service}</option>)}
              </select>
            </div>
            {form.paket ? <div className="full flex flex-wrap items-center justify-between gap-2 rounded-[10px] bg-sky px-4 py-3 text-[13px]"><span>Paket pilihan: <strong>{form.paket}</strong></span><button type="button" onClick={() => update("paket", "")} className="min-h-[44px] font-semibold underline underline-offset-4">Ubah / tanpa paket</button></div> : null}
            <div className={`field ${form.layanan === "Hotel" ? "" : "full"}`}>
              <label htmlFor="booking-tanggal">{form.layanan === "Hotel" ? "Tanggal check-in" : "Tanggal kunjungan"}</label>
              <input id="booking-tanggal" name="tanggal" required type="date" min={today || undefined} value={form.tanggal} onChange={(event) => update("tanggal", event.target.value)} aria-invalid={errors.tanggal ? true : undefined} aria-describedby={errors.tanggal ? "tanggal-error" : undefined} />
              {errors.tanggal ? <p id="tanggal-error" className="form-error" role="alert">{errors.tanggal}</p> : null}
            </div>
            {form.layanan === "Hotel" ? <div className="field">
              <label htmlFor="booking-checkout">Tanggal check-out</label>
              <input id="booking-checkout" name="checkout" required type="date" min={checkoutMin || undefined} value={form.checkout} onChange={(event) => update("checkout", event.target.value)} aria-invalid={errors.checkout ? true : undefined} aria-describedby={errors.checkout ? "checkout-error" : undefined} />
              {errors.checkout ? <p id="checkout-error" className="form-error" role="alert">{errors.checkout}</p> : null}
            </div> : null}
            {form.hewan ? <p className="care-note full" key={`${form.hewan}-${form.layanan}`}>{careNote(form.hewan)}</p> : null}
            <div className="field full">
              <label htmlFor="booking-catatan">Catatan khusus <span className="font-normal">(opsional)</span></label>
              <textarea id="booking-catatan" name="catatan" rows={3} maxLength={2000} value={form.catatan} onChange={(event) => update("catatan", event.target.value)} placeholder="Alergi, jadwal makan, karakter, atau pertanyaan stok produk…" />
            </div>
            <button type="submit" className="button full">Siapkan permintaan <ArrowRightIcon size={18} weight="bold" aria-hidden="true" /></button>
            <p className="full text-[12px] leading-relaxed text-muted">Data tidak disimpan di website. Pesan baru dikirim jika kamu melanjutkan dan mengirimnya di WhatsApp.</p>
          </fieldset>
        </form>
        <noscript>Aktifkan JavaScript untuk menyiapkan pesan booking. Detail layanan dan tarif tetap dapat dibaca di halaman ini.</noscript>
        {prepared ? <div className="request-result">
          <h3 ref={resultHeading} tabIndex={-1} className="text-[23px]">Rencananya sudah siap.</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">Periksa atau sesuaikan pesan ini sebelum menghubungi tim. Belum ada permintaan yang dikirim.</p>
          <label htmlFor="request-text" className="sr-only">Pesan permintaan yang dapat diedit</label>
          <textarea id="request-text" ref={requestText} value={message} onChange={(event) => { setMessage(event.target.value); setCopyStatus(""); }} />
          <div className="flex flex-wrap gap-3">
            {link ? <a className="button" href={link} target="_blank" rel="noopener noreferrer"><WhatsappLogoIcon size={20} weight="bold" aria-hidden="true" />Lanjut ke WhatsApp</a> : null}
            <button type="button" className="button-secondary" onClick={copy} disabled={copying || !message.trim()}><CopyIcon size={18} weight="bold" aria-hidden="true" />{copying ? "Menyalin…" : "Salin permintaan"}</button>
          </div>
          {!link ? <p className="mt-4 text-[12px] leading-relaxed text-muted">Kontak WhatsApp Griya Sahabat belum dikonfirmasi. Pesan bisa kamu salin; tidak ada pengalihan ke nomor contoh.</p> : null}
          <p className="mt-3 text-[12px] leading-relaxed text-leaf" role="status">{copyStatus}</p>
        </div> : null}
      </div>
    </div>
  </section>;
}
