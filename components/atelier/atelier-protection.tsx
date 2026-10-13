"use client";

import Image from "next/image";
import { useLocale } from "@/components/locale-toggle";
import styles from "./atelier-protection.module.css";

const layers = [
  { number: "01", ar: "سطح متجهّز", en: "Prepared paint", className: "paint" },
  { number: "02", ar: "فيلم شفاف", en: "Transparent film", className: "film" },
  { number: "03", ar: "تشطيب متناسق", en: "Even finish", className: "finish" },
] as const;

export function AtelierProtection() {
  const { locale } = useLocale();
  const isArabic = locale === "ar";

  return (
    <section
      className={styles.section}
      id="protection"
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby="atelier-protection-title"
    >
      <div className={styles.inner}>
        <div className={styles.story}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              <span>02</span>{isArabic ? "حكاية الحماية" : "The protection story"}
            </p>
            <h2 id="atelier-protection-title">
              {isArabic ? "النتيجة الحلوة بتبدأ من التجهيز." : "A considered finish starts with preparation."}
            </h2>
            <p className={styles.description}>
              {isArabic
                ? "بنجهّز سطح الطلاء ونركّب الفيلم بما يناسب خطوط العربية. كل ما كان التجهيز والقصّ والتركيب أدق، كان شكل الطبقة أهدى ومتناسق أكتر."
                : "We prepare the paint and fit the film to the car’s contours. Careful preparation, cutting and installation help the layer sit neatly with the finish."}
            </p>
          </div>

          <figure className={styles.craftFigure}>
            <Image
              className={styles.craftImage}
              src="/images/atelier/ppf-craft.png"
              alt={isArabic ? "تركيب فيلم حماية شفاف على سطح سيارة" : "Clear paint protection film being fitted to a car panel"}
              fill
              sizes="(max-width: 800px) 100vw, 58vw"
            />
            <figcaption>{isArabic ? "تركيب بهدوء واهتمام بالتفاصيل" : "Careful fitting, detail by detail"}</figcaption>
          </figure>
        </div>

        <div className={styles.material}>
          <div className={styles.diagram} role="img" aria-label={isArabic ? "طبقات حماية الطلاء: سطح متجهّز، فيلم شفاف، وتشطيب متناسق" : "Paint protection layers: prepared paint, transparent film, and an even finish"}>
            <div className={styles.layers} aria-hidden="true">
              {layers.map((layer) => (
                <span className={`${styles.layer} ${styles[layer.className]}`} key={layer.number} />
              ))}
            </div>
            <ol className={styles.layerLabels}>
              {layers.map((layer) => (
                <li key={layer.number}>
                  <span>{layer.number}</span>
                  <b>{layer[locale]}</b>
                </li>
              ))}
            </ol>
          </div>

          <figure className={styles.finishFigure}>
            <Image
              className={styles.finishImage}
              src="/images/atelier/protected-finish.png"
              alt={isArabic ? "انعكاس ضوء النهار على سطح طلاء محمي" : "Daylight reflecting across a protected paint finish"}
              fill
              sizes="(max-width: 800px) 100vw, 34vw"
            />
            <figcaption>{isArabic ? "سطح نظيف في ضوء النهار" : "A clean surface in daylight"}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
