export type Service = "Grooming" | "Hotel" | "Daycare";

export const services: Service[] = ["Grooming", "Hotel", "Daycare"];

export function bookingHref(service: Service, packageName = "", pet = "") {
  const query = new URLSearchParams({ layanan: service });
  if (packageName) query.set("paket", packageName);
  if (pet) query.set("hewan", pet);
  return `/?${query}#booking`;
}

export function localToday(now = new Date()) {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

export function civilDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const date = new Date(`${value}T12:00:00`);
  const [year, month, day] = value.split("-").map(Number);
  return Number.isFinite(date.getTime()) && date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day ? date : null;
}

const dateFormatter = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" });

export function visitDate(value: string) {
  const date = civilDate(value);
  return date ? dateFormatter.format(date) : "";
}

export function careNote(pet: string) {
  if (pet === "Kucing") return "Zona kucing terpisah dari anjing. Ceritakan kebiasaan kecilnya agar pendekatan bisa disesuaikan.";
  if (pet === "Anjing") return "Zona anjing terpisah dari kucing. Kenalkan ukuran, ritme bermain, dan kebiasaannya kepada tim.";
  return "Sahabat bersayap atau bersisik? Konfirmasikan kebutuhan dan kesesuaian layanan dengan tim terlebih dahulu.";
}

export interface VisitRequest {
  nama: string;
  whatsapp: string;
  hewan: string;
  layanan: Service;
  paket: string;
  tanggal: string;
  checkout: string;
  catatan: string;
}

export type RequestErrors = Partial<Record<keyof VisitRequest, string>>;

export function requestErrors(form: VisitRequest, today = localToday()) {
  const errors: RequestErrors = {};
  if (!form.nama.trim()) errors.nama = "Tulis nama kamu agar tim tahu siapa yang menghubungi.";
  if (!/^\+?[\d\s()-]{8,22}$/.test(form.whatsapp) || form.whatsapp.replace(/\D/g, "").length < 8 || form.whatsapp.replace(/\D/g, "").length > 15) errors.whatsapp = "Tulis nomor WhatsApp aktif, misalnya diawali 08 atau +62.";
  if (!form.hewan.trim()) errors.hewan = "Pilih jenis sahabatmu.";
  if (!civilDate(form.tanggal)) errors.tanggal = "Pilih tanggal rencana kunjungan.";
  else if (form.tanggal < today) errors.tanggal = "Tanggal sudah lewat. Pilih hari ini atau setelahnya.";
  if (form.layanan === "Hotel") {
    if (!civilDate(form.checkout)) errors.checkout = "Pilih tanggal check-out.";
    else if (form.checkout <= form.tanggal) errors.checkout = "Check-out harus setelah check-in, minimal satu malam.";
  }
  return errors;
}

export function requestMessage(form: VisitRequest) {
  return [
    "Halo Griya Sahabat, saya ingin mengajukan rencana kunjungan:",
    `Nama: ${form.nama.trim()}`,
    `WhatsApp: ${form.whatsapp.trim()}`,
    `Jenis hewan: ${form.hewan}`,
    `Layanan: ${form.layanan === "Hotel" ? "Pet Hotel" : form.layanan}`,
    form.paket ? `Paket: ${form.paket}` : "",
    `${form.layanan === "Hotel" ? "Check-in" : "Tanggal kunjungan"}: ${visitDate(form.tanggal)}`,
    form.layanan === "Hotel" ? `Check-out: ${visitDate(form.checkout)}` : "",
    form.catatan.trim() ? `Catatan khusus: ${form.catatan.trim()}` : "",
    "Mohon konfirmasi ketersediaan, kesesuaian layanan, dan harga final. Terima kasih!",
  ].filter(Boolean).join("\n");
}

export function whatsappUrl(number: string, message: string) {
  const digits = number.trim();
  if (!/^[1-9]\d{7,14}$/.test(digits) || digits === "6281234567890") return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
