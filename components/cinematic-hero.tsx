"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpLeft, MapPin, MessageCircle, Phone } from "lucide-react";
import { useRef, type CSSProperties, type PointerEvent } from "react";
import { mapPointerToDepth } from "@/components/hero-depth";
import { useLocale } from "@/components/locale-toggle";

const copy = {
  ar: {
    eyebrow: "حماية طلاء بمستوى أعلى",
    title: "احمي حضور عربيتك.",
    lead: "PPF وعناية دقيقة تحافظ على عمق اللون ولمعة العربية — من غير ما تغيّر شخصيتها.",
    primary: "اطلب تقييم",
    secondary: "كلمنا",
    location: "The View Promenade · الشيخ زايد",
    scroll: "اكتشف طبقة الحماية",
    alt: "سيارة جرافيت ثلاثية الأبعاد في مشهد SLS داكن",
  },
  en: {
    eyebrow: "Elevated paint protection",
    title: "Protect its presence.",
    lead: "PPF and precision care that preserve depth, gloss and the character of your car.",
    primary: "Get an assessment",
    secondary: "Call us",
    location: "The View Promenade · Sheikh Zayed",
    scroll: "Discover the protection layer",
    alt: "Three-dimensional graphite car in a dark SLS scene",
  },
} as const;

type HeroStyle = CSSProperties & {
  "--depth-x": string;
  "--depth-y": string;
};

export function CinematicHero() {
  const { locale } = useLocale();
  const t = copy[locale];
  const heroRef = useRef<HTMLElement>(null);

  const updateDepth = (event: PointerEvent<HTMLElement>) => {
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const depth = mapPointerToDepth(event.clientX - rect.left, event.clientY - rect.top, rect.width, rect.height);
    hero.style.setProperty("--depth-x", String(depth.x));
    hero.style.setProperty("--depth-y", String(depth.y));
  };

  const resetDepth = () => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.setProperty("--depth-x", "0");
    hero.style.setProperty("--depth-y", "0");
  };

  return (
    <section
      className="hero-cinematic"
      id="home"
      ref={heroRef}
      onPointerMove={updateDepth}
      onPointerLeave={resetDepth}
      style={{ "--depth-x": "0", "--depth-y": "0" } as HeroStyle}
    >
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-light hero-light-one" aria-hidden="true" />
      <div className="hero-light hero-light-two" aria-hidden="true" />

      <div className="hero-copy-cinematic shell-width">
        <div className="hero-copy-inner">
          <p className="hero-overline"><span>SLS</span>{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-cinematic-lead">{t.lead}</p>
          <div className="hero-cinematic-actions">
            <a className="button button-bronze" href="https://wa.me/201100666717" target="_blank" rel="noreferrer">
              <MessageCircle size={18} />{t.primary}<ArrowUpLeft size={17} />
            </a>
            <a className="hero-phone" href="tel:+201100666717"><Phone size={17} />{t.secondary}</a>
          </div>
        </div>
      </div>

      <div className="hero-scene" aria-label={locale === "ar" ? "مشهد سيارة ثلاثي الأبعاد" : "Three-dimensional car scene"}>
        <div className="hero-halo" aria-hidden="true" />
        <div className="hero-floor" aria-hidden="true" />
        <div className="hero-reflection" aria-hidden="true">
          <Image src="/images/hero-car-3d.png" alt="" width={1774} height={887} sizes="90vw" />
        </div>
        <div className="hero-car-layer">
          <Image src="/images/hero-car-3d.png" alt={t.alt} width={1774} height={887} sizes="(max-width: 720px) 118vw, 82vw" priority />
        </div>
        <div className="hero-film-glint" aria-hidden="true" />
        <div className="hero-foreground-streak" aria-hidden="true" />
      </div>

      <div className="hero-bottom shell-width">
        <span className="hero-location"><MapPin size={15} />{t.location}</span>
        <span className="hero-rating"><b>5.0</b><i>★★★★★</i><small>24 reviews</small></span>
        <a href="#protection" className="hero-scroll"><span>{t.scroll}</span><ArrowDown size={17} /></a>
      </div>
    </section>
  );
}
