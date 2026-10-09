import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { StorefrontIcon } from "@phosphor-icons/react/dist/csr/Storefront";
import { ScissorsIcon } from "@phosphor-icons/react/dist/csr/Scissors";
import { HouseIcon } from "@phosphor-icons/react/dist/csr/House";
import { SunIcon } from "@phosphor-icons/react/dist/csr/Sun";
import { careNote, civilDate, localToday, services, type Service } from "../lib/booking";
import { basePath } from "../lib/site";

const paths = [
  { name: "Pet Shop", href: "#toko", icon: StorefrontIcon },
  { name: "Grooming", href: "#grooming", icon: ScissorsIcon },
  { name: "Pet Hotel", href: "#hotel", icon: HouseIcon },
  { name: "Daycare", href: "#daycare", icon: SunIcon },
];

export default function Hero() {
  const [pet, setPet] = useState("Kucing");
  const [service, setService] = useState<Service>("Grooming");
  const [today, setToday] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedService = params.get("layanan") as Service;
    const selectedPet = params.get("hewan") ?? "";
    if (services.includes(selectedService)) setService(selectedService);
    if (["Kucing", "Anjing", "Hewan lain"].includes(selectedPet)) setPet(selectedPet);
    const selectedDate = params.get("tanggal") ?? "";
    if (civilDate(selectedDate)) setDate(selectedDate);
    setToday(localToday());
  }, []);

  return (
    <section id="hero" className="welcome">
      <div className="wrap">
        <h1>Saat Kamu Pergi,<br />Sahabatmu Tetap Merasa Di Rumah.</h1>
        <p className="welcome-intro">Pet shop, grooming, hotel, dan daycare dalam satu tempat.<br className="hidden md:block" /> Untuk yang berbulu, bersayap, dan bersisik—dengan perhatian pada kebutuhan masing-masing.</p>
        <div className="welcome-desk">
          <figure className="pet-portrait">
            <img src={`${basePath}images/pets/happy-dog-640.webp`} srcSet={`${basePath}images/pets/happy-dog-640.webp 640w, ${basePath}images/pets/happy-dog-1280.webp 1280w`} sizes="(max-width: 767px) 44vw, 320px" width="640" height="480" alt="Anjing kecil tersenyum di antara bunga dan rumput" fetchPriority="high" />
            <figcaption>Yang ceria, disambut hangat.</figcaption>
          </figure>
          <div className="visit-desk">
            <h2>Mau main, dirawat, atau menginap?</h2>
            <p>Rencana dulu, konfirmasi bersama tim.</p>
            <form action="#booking" method="get">
              <div className="field">
                <label htmlFor="quick-service">Layanan yang dibutuhkan</label>
                <select id="quick-service" name="layanan" value={service} onChange={(event) => setService(event.target.value as Service)}>
                  <option value="Grooming">Grooming</option><option value="Hotel">Pet Hotel</option><option value="Daycare">Daycare</option>
                </select>
              </div>
              <div className="two-fields">
                <div className="field">
                  <label htmlFor="quick-pet">Sahabatmu</label>
                  <select id="quick-pet" name="hewan" value={pet} onChange={(event) => setPet(event.target.value)}>
                    <option>Kucing</option><option>Anjing</option><option>Hewan lain</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="quick-date">{service === "Hotel" ? "Rencana check-in" : "Tanggal rencana"}</label>
                  <input id="quick-date" name="tanggal" type="date" min={today || undefined} value={date} onChange={(event) => setDate(event.target.value)} aria-describedby="quick-date-help" />
                </div>
              </div>
              <p className="care-note" key={`${pet}-${service}`} aria-live="polite">{careNote(pet)}</p>
              <button type="submit" className="button">Rencanakan kunjungan <ArrowRightIcon size={17} weight="bold" aria-hidden="true" /></button>
              <p id="quick-date-help" className="text-center text-[11px] leading-relaxed text-muted">Tanggal boleh dilengkapi nanti. Belum ada booking yang dikirim.</p>
            </form>
          </div>
          <figure className="pet-portrait">
            <img src={`${basePath}images/pets/curious-kitten-640.webp`} srcSet={`${basePath}images/pets/curious-kitten-640.webp 640w, ${basePath}images/pets/curious-kitten-1280.webp 1280w`} sizes="(max-width: 767px) 44vw, 320px" width="640" height="480" alt="Anak kucing bermata besar di bawah dedaunan hijau" />
            <figcaption>Yang pemalu, dikenali dulu.</figcaption>
          </figure>
        </div>
        <p className="stock-note">Foto ilustrasi Pexels, bukan dokumentasi fasilitas atau pelanggan Griya Sahabat.</p>
        <nav className="service-paths" aria-label="Temukan layanan sahabatmu">
          {paths.map((path) => <a key={path.name} href={path.href}><path.icon size={20} weight="bold" aria-hidden="true" />{path.name}</a>)}
        </nav>
      </div>
    </section>
  );
}
