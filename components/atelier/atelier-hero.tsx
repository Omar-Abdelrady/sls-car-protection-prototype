"use client";

import { ArrowUpLeft, MapPin } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/components/locale-toggle";
import styles from "./atelier-hero.module.css";

const copy = {
  ar: {
    eyebrow: "عناية دقيقة بالسيارات",
    title: "حماية هادية. حضور يفضل واضح.",
    description: "تجهيز دقيق وحماية مدروسة تحافظ على تفاصيل البوية، بما يناسب عربيتك وطريقة استخدامك.",
    assessment: "اطلب تقييم",
    location: "زورونا في الشيخ زايد",
    imageAlt: "سيارة فضية في مساحة عناية مضيئة بتصميم معماري هادئ",
    proof: ["The View Promenade", "PPF", "Detailing", "الشيخ زايد"],
  },
  en: {
    eyebrow: "Considered car care",
    title: "Quiet protection. Lasting presence.",
    description: "Careful preparation and considered protection for your car’s finish, tailored to how you use it.",
    assessment: "Request an assessment",
    location: "Find us in Sheikh Zayed",
    imageAlt: "Silver car in a bright, calm architectural detailing studio",
    proof: ["The View Promenade", "PPF", "Detailing", "Sheikh Zayed"],
  },
} as const;

export function AtelierHero() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section className={styles.hero} id="home" aria-labelledby="atelier-hero-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span aria-hidden="true" />{t.eyebrow}</p>
          <h1 className={styles.title} id="atelier-hero-title">{t.title}</h1>
          <p className={styles.description}>{t.description}</p>
          <div className={styles.actions}>
            <a
              className={styles.primaryAction}
              href="https://wa.me/201100666717"
              target="_blank"
              rel="noreferrer"
            >
              {t.assessment}
              <ArrowUpLeft size={17} aria-hidden="true" />
            </a>
            <a
              className={styles.secondaryAction}
              href="https://www.google.com/maps/search/?api=1&query=SLS%20Car%20Paint%20Protection%20Film%20Zayed"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={17} aria-hidden="true" />
              {t.location}
            </a>
          </div>
        </div>

        <figure className={styles.imageFrame}>
          <Image
            className={styles.image}
            src="/images/atelier/hero-daylight.png"
            alt={t.imageAlt}
            width={1800}
            height={1126}
            sizes="(max-width: 720px) 100vw, (max-width: 1100px) 52vw, 56vw"
            priority
          />
          <figcaption className={styles.imageCaption}>SLS · Car Paint Protection</figcaption>
        </figure>
      </div>

      <ul className={styles.proof} aria-label={locale === "ar" ? "الموقع والخدمات" : "Location and services"}>
        {t.proof.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}
