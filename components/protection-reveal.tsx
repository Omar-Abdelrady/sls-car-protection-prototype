"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { clampRevealProgress } from "@/components/reveal-progress";
import { useLocale } from "@/components/locale-toggle";

export function ProtectionReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { locale } = useLocale();
  const isArabic = locale === "ar";

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const next = reducedMotion
        ? 100
        : clampRevealProgress(rect.top + window.scrollY, section.offsetHeight, window.innerHeight, window.scrollY);
      setProgress(next);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      media.removeEventListener("change", updateMotion);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [reducedMotion]);

  const afterLabel = isArabic ? "بعد الحماية" : "Protected finish";
  const beforeLabel = isArabic ? "قبل الحماية" : "Before protection";

  return (
    <section className="protection-story" id="protection" ref={sectionRef} aria-labelledby="protection-title">
      <div className="protection-sticky shell-width">
        <div className="protection-copy">
          <p className="eyebrow"><span>02</span>{isArabic ? "شوف الفرق بنفسك" : "See the difference"}</p>
          <h2 id="protection-title">{isArabic ? "حماية بتبان في كل انعكاس." : "Protection you can see in every reflection."}</h2>
          <p>{isArabic ? "اسحب معاك بالسكرول وشوف السطح بيتحول من لمعة عادية لطبقة حماية أنضف وأهدى." : "Scroll through the finish as the surface moves from everyday wear to a cleaner, calmer gloss."}</p>
          <div className="reveal-readout" aria-live="polite"><span>{String(progress).padStart(2, "0")}%</span><small>{isArabic ? "نسبة الحماية" : "Protection reveal"}</small></div>
        </div>
        <div className="reveal-frame" style={{ "--reveal": `${progress}%` } as CSSProperties}>
          <Image className="reveal-image reveal-before" src="/images/before-protection.png" alt={isArabic ? "سيارة قبل تركيب حماية الطلاء" : "Car before paint protection"} fill sizes="(max-width: 800px) 92vw, 65vw" priority />
          <div className="reveal-after" aria-hidden="true"><Image className="reveal-image" src="/images/after-protection.png" alt="" fill sizes="(max-width: 800px) 92vw, 65vw" /></div>
          <div className="reveal-handle" aria-hidden="true"><span /></div>
          <div className="reveal-label reveal-label-before">{beforeLabel}</div>
          <div className="reveal-label reveal-label-after">{afterLabel}</div>
        </div>
      </div>
    </section>
  );
}
