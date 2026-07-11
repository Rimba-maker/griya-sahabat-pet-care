import { useEffect, useState } from "react";
import { HouseIcon } from "@phosphor-icons/react/dist/csr/House";
import { SquaresFourIcon } from "@phosphor-icons/react/dist/csr/SquaresFour";
import { VideoCameraIcon } from "@phosphor-icons/react/dist/csr/VideoCamera";
import { StorefrontIcon } from "@phosphor-icons/react/dist/csr/Storefront";
import { CalendarCheckIcon } from "@phosphor-icons/react/dist/csr/CalendarCheck";

const navItems = [
  { id: "hero", label: "Beranda", icon: HouseIcon },
  { id: "layanan", label: "Layanan", icon: SquaresFourIcon },
  { id: "live-cctv", label: "Live Cam", icon: VideoCameraIcon },
  { id: "toko", label: "Toko", icon: StorefrontIcon },
];

const bookingItem = { id: "booking", label: "Booking", icon: CalendarCheckIcon };

export default function BottomNav() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const ids = [...navItems.map((i) => i.id), bookingItem.id];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const firstVisible = ids.find((id) => visible.has(id));
        if (firstVisible) setActiveId(firstVisible);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t border-border bg-cream-alt pb-[env(safe-area-inset-bottom)] md:hidden">
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-semibold ${
              isActive ? "text-teal-deep" : "text-ink-muted"
            }`}
          >
            <item.icon size={21} weight={isActive ? "fill" : "regular"} />
            {item.label}
          </a>
        );
      })}
      <a href={`#${bookingItem.id}`} className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-bold">
        <span className="flex items-center gap-1 rounded-full bg-teal px-3 py-1 text-white">
          <bookingItem.icon size={16} weight="bold" />
          {bookingItem.label}
        </span>
      </a>
    </nav>
  );
}
