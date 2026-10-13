"use client";

import { useLocale } from "@/components/locale-toggle";
import { AtelierFaq } from "@/components/atelier/atelier-faq";
import { AtelierHeader } from "@/components/atelier/atelier-header";
import { AtelierHero } from "@/components/atelier/atelier-hero";
import { AtelierProcess } from "@/components/atelier/atelier-process";
import { AtelierProtection } from "@/components/atelier/atelier-protection";
import { AtelierServices } from "@/components/atelier/atelier-services";
import styles from "./page.module.css";

export default function AtelierPage() {
  const { locale } = useLocale();

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#atelier-main">
        {locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>
      <AtelierHeader />
      <main className={styles.main} id="atelier-main" data-concept="daylight-atelier">
        <AtelierHero />
        <AtelierServices />
        <AtelierProtection />
        <AtelierProcess />
        <AtelierFaq />
      </main>
      <footer className={styles.footer}>
        <span className={styles.brand}>SLS</span>
        <p>{locale === "ar" ? "The View Promenade · الشيخ زايد · 011 00666717" : "The View Promenade · Sheikh Zayed · 011 00666717"}</p>
      </footer>
    </div>
  );
}
