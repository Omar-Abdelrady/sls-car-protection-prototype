"use client";

import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { ClipboardCheck, SearchCheck, Sparkles, Wrench } from "lucide-react";
import { useLocale } from "@/components/locale-toggle";
import styles from "./atelier-process.module.css";

const steps = [
  {
    number: "01",
    icon: SearchCheck,
    title: { ar: "نعاين", en: "Inspect" },
    description: {
      ar: "نشوف حالة الطلاء وتفاصيل العربية الأول.",
      en: "We start by looking over the paint and the car’s details.",
    },
  },
  {
    number: "02",
    icon: Sparkles,
    title: { ar: "نجهّز", en: "Prepare" },
    description: {
      ar: "نجهّز السطح بعناية قبل أي تركيب.",
      en: "We carefully prepare the surface before installation.",
    },
  },
  {
    number: "03",
    icon: Wrench,
    title: { ar: "نركّب", en: "Install" },
    description: {
      ar: "نركّب الخدمة المتفق عليها بما يناسب العربية.",
      en: "We carry out the agreed service to suit the car.",
    },
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: { ar: "نراجع ونسلّم", en: "Review & hand over" },
    description: {
      ar: "نراجع الشغل سوا ونوضحلك اللي اتعمل.",
      en: "We review the work together and walk you through what’s done.",
    },
  },
];

export function AtelierProcess() {
  const { locale } = useLocale();
  const isArabic = locale === "ar";

  return (
    <section
      className={styles.section}
      id="process"
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby="atelier-process-title"
    >
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>
              <span>03</span>{isArabic ? "خطوات واضحة" : "A clear process"}
            </p>
            <h2 id="atelier-process-title">
              {isArabic ? "من أول معاينة لحد ما تستلم." : "From the first look to handover."}
            </h2>
          </div>
          <p className={styles.intro}>
            {isArabic
              ? "كل خطوة بتبدأ باتفاق واضح، وبنراجع النتيجة معاك قبل التسليم."
              : "Each step starts with a clear plan, and we review the result with you before handover."}
          </p>
        </div>

        <figure className={styles.imageFigure}>
          <Image
            className={styles.image}
            src={assetPath("/images/atelier/inspection.png")}
            alt={isArabic ? "فحص سطح طلاء السيارة قبل بدء العمل" : "Inspecting a car’s paint before work begins"}
            fill
            sizes="(max-width: 800px) 100vw, 100vw"
          />
          <figcaption>{isArabic ? "الفحص بيساعدنا نحدد الخطوة المناسبة" : "Inspection helps us choose the right next step"}</figcaption>
        </figure>

        <ol className={styles.steps}>
          {steps.map(({ number, icon: Icon, title, description }) => (
            <li className={styles.step} key={number}>
              <div className={styles.stepTop}>
                <span className={styles.number}>{number}</span>
                <span className={styles.icon} aria-hidden="true"><Icon size={21} strokeWidth={1.5} /></span>
              </div>
              <h3>{title[locale]}</h3>
              <p>{description[locale]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
