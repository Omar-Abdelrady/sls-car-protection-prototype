"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LocaleToggle, useLocale } from "@/components/locale-toggle";

const copy = {
  ar: { services: "الخدمات", story: "فحص الطلاء", process: "خط السير", faq: "الأسئلة", quote: "اطلب حماية", menu: "فتح القائمة", close: "إغلاق القائمة" },
  en: { services: "Services", story: "Paint scan", process: "Workflow", faq: "FAQ", quote: "Protect my car", menu: "Open menu", close: "Close menu" },
} as const;

export function SiteHeader() {
  const { locale } = useLocale();
  const t = copy[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const links = [
    ["services", t.services],
    ["protection", t.story],
    ["process", t.process],
    ["faq", t.faq],
  ] as const;

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner shell-width">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="SLS home">
          <Image src="/images/sls-logo.png" alt="SLS" width={54} height={38} className="brand-logo" priority />
          <span className="brand-text"><strong>SLS</strong><small>Protect your dream</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <LocaleToggle />
          <a className="header-cta" href="https://wa.me/201100666717" target="_blank" rel="noreferrer">
            {t.quote}<ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
            <button className="mobile-menu-trigger" type="button" aria-label={isOpen ? t.close : t.menu} aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <nav className="mobile-menu-panel" aria-label="Mobile navigation">
              {links.map(([id, label]) => <a href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>)}
              <a className="mobile-booking" href="https://wa.me/201100666717" target="_blank" rel="noreferrer" onClick={closeMenu}>{t.quote}</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
