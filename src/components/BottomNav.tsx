import { useEffect, useState } from "react";
import { HouseIcon } from "@phosphor-icons/react/dist/csr/House";
import { SquaresFourIcon } from "@phosphor-icons/react/dist/csr/SquaresFour";
import { VideoCameraIcon } from "@phosphor-icons/react/dist/csr/VideoCamera";
import { StorefrontIcon } from "@phosphor-icons/react/dist/csr/Storefront";
import { CalendarCheckIcon } from "@phosphor-icons/react/dist/csr/CalendarCheck";

const navItems = [
  { id: "hero", label: "Beranda", icon: HouseIcon },
  { id: "layanan", label: "Layanan", icon: SquaresFourIcon },
  { id: "live-cctv", label: "CCTV", icon: VideoCameraIcon },
  { id: "toko", label: "Toko", icon: StorefrontIcon },
];

export default function BottomNav() {
  const [activeId, setActiveId] = useState("hero");
  useEffect(() => {
    const ids = [...navItems.map((item) => item.id), "booking"];
    const visible = new Set<string>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      }
      const current = ids.find((id) => visible.has(id));
      if (current) setActiveId(current);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  return <nav className="bottom-nav" aria-label="Navigasi cepat">
    {navItems.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={activeId === item.id ? "location" : undefined}>
      <item.icon size={22} weight={activeId === item.id ? "fill" : "bold"} aria-hidden="true" />{item.label}
    </a>)}
    <a href="#booking" className="book-tab" aria-current={activeId === "booking" ? "location" : undefined}><CalendarCheckIcon size={21} weight="bold" aria-hidden="true" />Booking</a>
  </nav>;
}
