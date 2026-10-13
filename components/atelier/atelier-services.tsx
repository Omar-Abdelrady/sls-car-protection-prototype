"use client";

import { Paintbrush, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { useLocale } from "@/components/locale-toggle";
import styles from "./atelier-services.module.css";

const services = [
  {
    number: "01",
    icon: ShieldCheck,
    title: { ar: "حماية الطلاء PPF", en: "Paint Protection Film" },
    description: {
      ar: "فيلم شفاف لحماية الطلاء، بيتحدد تركيبه حسب شكل العربية وحالة السطح.",
      en: "Clear film for paint protection, fitted to the car’s shape and the condition of its finish.",
    },
  },
  {
    number: "02",
    icon: Paintbrush,
    title: { ar: "العناية بالتفاصيل", en: "Detailing" },
    description: {
      ar: "تنضيف وعناية بسطح العربية وتفاصيلها، حسب احتياجها.",
      en: "Care for the car’s surfaces and details, tailored to what it needs.",
    },
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: { ar: "عناية على مقاسك", en: "Tailored Care" },
    description: {
      ar: "بنراجع حالة العربية ونتفق على الخطوات المناسبة قبل ما نبدأ.",
      en: "We review the car’s condition and agree on the right steps before work begins.",
    },
  },
];

export function AtelierServices() {
  const { locale } = useLocale();
  const isArabic = locale === "ar";

  return (
    <section
      className={styles.section}
      id="services"
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby="atelier-services-title"
    >
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>
            <span>01</span>{isArabic ? "الخدمات" : "Our services"}
          </p>
          <h2 id="atelier-services-title">
            {isArabic ? "عناية تبدأ من اللي عربيتك محتاجاه." : "Care that starts with what your car needs."}
          </h2>
          <p className={styles.lede}>
            {isArabic
              ? "كل عربية ليها حكايتها. بنختار الخدمة بعد ما نشوف حالتها وطريقة استخدامك ليها."
              : "Every car is different. We recommend a service after seeing its condition and how you use it."}
          </p>
        </div>

        <ol className={styles.list}>
          {services.map(({ number, icon: Icon, title, description }) => (
            <li className={styles.row} key={number}>
              <span className={styles.number}>{number}</span>
              <div className={styles.copy}>
                <h3>{title[locale]}</h3>
                <p>{description[locale]}</p>
              </div>
              <span className={styles.icon} aria-hidden="true"><Icon size={23} strokeWidth={1.5} /></span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
