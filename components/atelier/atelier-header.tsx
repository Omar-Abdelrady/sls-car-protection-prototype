"use client";

import { ArrowUpLeft, Menu, X } from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { useState } from "react";
import { LocaleToggle, useLocale } from "@/components/locale-toggle";
import styles from "./atelier-header.module.css";

const copy = {
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    protection: "الحماية",
    process: "خطواتنا",
    faq: "الأسئلة",
    booking: "اطلب تقييم",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    primaryNavigation: "التنقل الرئيسي",
    mobileNavigation: "التنقل على الهاتف",
    brand: "SLS — حماية طلاء السيارات",
  },
  en: {
    home: "Home",
    services: "Services",
    protection: "Protection",
    process: "Our process",
    faq: "FAQ",
    booking: "Request an assessment",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNavigation: "Primary navigation",
    mobileNavigation: "Mobile navigation",
    brand: "SLS — car paint protection",
  },
} as const;

const sectionLinks = [
  ["services", "services"],
  ["protection", "protection"],
  ["process", "process"],
  ["faq", "faq"],
] as const;

export function AtelierHeader() {
  const { locale } = useLocale();
  const t = copy[locale];
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header} data-variant="atelier">
      <div className={styles.inner}>
        <a className={styles.brand} href="#home" onClick={closeMenu} aria-label={t.brand}>
          <Image
            src={assetPath("/images/sls-logo.png")}
            alt="SLS"
            width={80}
            height={53}
            className={styles.logo}
          />
          <span className={styles.brandText}>
            <strong>SLS</strong>
            <small>Protect your dream</small>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label={t.primaryNavigation}>
          {sectionLinks.map(([id, key]) => (
            <a href={`#${id}`} key={id} onClick={closeMenu}>
              {t[key]}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <span className={styles.locale}>
            <LocaleToggle />
          </span>
          <a
            className={styles.booking}
            href="https://wa.me/201100666717"
            target="_blank"
            rel="noreferrer"
          >
            {t.booking}
            <ArrowUpLeft size={16} aria-hidden="true" />
          </a>
          <button
            className={styles.menuButton}
            type="button"
            aria-label={isOpen ? t.closeMenu : t.openMenu}
            aria-expanded={isOpen}
            aria-controls="atelier-mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ""}`}
        id="atelier-mobile-navigation"
        aria-label={t.mobileNavigation}
        aria-hidden={!isOpen}
      >
        {sectionLinks.map(([id, key]) => (
          <a href={`#${id}`} key={id} onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
            {t[key]}
          </a>
        ))}
        <a
          className={styles.mobileBooking}
          href="https://wa.me/201100666717"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
        >
          {t.booking}
          <ArrowUpLeft size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
