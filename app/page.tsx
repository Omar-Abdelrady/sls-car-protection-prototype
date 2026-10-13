"use client";

import Image from "next/image";
import { ArrowUpLeft, Check, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { CinematicHero } from "@/components/cinematic-hero";
import { FaqList } from "@/components/faq-list";
import { LocaleToggle, useLocale } from "@/components/locale-toggle";
import { ProtectionReveal } from "@/components/protection-reveal";
import { SiteHeader } from "@/components/site-header";

const content = {
    ar: {
    navCta: "احجز تقييم", eyebrow: "عناية دقيقة للسيارات", title: "احمي العربية اللي بتحبها.", lead: "حماية بوية، PPF وتفاصيل دقيقة لعربيتك — في مساحة معمولة للناس اللي بتلاحظ الفرق.", primary: "اطلب تقييم", secondary: "كلمنا", location: "The View Promenade · بعد Gate 4", scroll: "انزل وشوف الفرق", trust: "ثقة مبنية على التفاصيل", servicesLabel: "01 / خدماتنا", servicesTitle: "كل طبقة ليها سبب.", servicesLead: "بنبدأ بفحص واضح، ونرشحلك الحماية المناسبة من غير مبالغة ولا كلام محفوظ.", processLabel: "03 / خطواتنا", processTitle: "من أول فحص لآخر لمعة.", processLead: "تجربة منظمة، هادية، ومركزة على إن العربية تخرج بالشكل اللي تستحقه.", contactTitle: "جاهز تحافظ على حلمك؟", contactLead: "ابعتلنا موديل عربيتك وصورة بسيطة، ونرجعلك بالخطوة المناسبة.", footer: "Protect your dream", faqTitle: "أسئلة قبل الزيارة", faq: [{ question: "أبدأ منين؟", answer: "ابعتلنا موديل العربية وصورة أو اتصل بينا، ونحدد معاك التقييم المناسب." }, { question: "الخدمات بتتعمل فين؟", answer: "في The View Promenade، Waslet Dahshour، بعد Gate 4 في الشيخ زايد." }, { question: "أحجز إزاي؟", answer: "من خلال واتساب أو مكالمة مباشرة على 011 00666717." }], services: [{ icon: ShieldCheck, title: "Paint Protection Film", text: "طبقة شفافة مصممة تساعد تحافظ على شكل البوية ولمعتها." }, { icon: Sparkles, title: "Detailing", text: "تنظيف وتجهيز بصري يخلّي كل خط وانعكاس واضح." }, { icon: Check, title: "Care plans", text: "توصية بسيطة حسب استخدامك وشكل العربية اللي عايزه." }], steps: ["Inspect", "Prepare", "Protect", "Deliver"] },
    en: {
    navCta: "Get a quote", eyebrow: "Precision car care", title: "Protect the car you love.", lead: "Paint protection, PPF and meticulous detailing for drivers who notice the difference.", primary: "Get a quote", secondary: "Call us", location: "The View Promenade · after Gate 4", scroll: "Scroll to see the difference", trust: "Trust built on detail", servicesLabel: "01 / Services", servicesTitle: "Every layer has a reason.", servicesLead: "We start with a clear inspection, then recommend the right protection without overpromising.", processLabel: "03 / Our process", processTitle: "From first inspection to final gloss.", processLead: "A calm, structured experience built around the finish your car deserves.", contactTitle: "Ready to protect your dream?", contactLead: "Send us your car model and a quick photo. We will guide you to the right next step.", footer: "Protect your dream", faqTitle: "Before you visit", faq: [{ question: "Where do I start?", answer: "Send us your car model and a photo, or call us to arrange the right evaluation." }, { question: "Where are you located?", answer: "The View Promenade, Waslet Dahshour, after Gate 4 in Sheikh Zayed." }, { question: "How do I book?", answer: "Message us on WhatsApp or call 011 00666717 directly." }], services: [{ icon: ShieldCheck, title: "Paint Protection Film", text: "A clear protective layer designed to help preserve the paint finish." }, { icon: Sparkles, title: "Detailing", text: "Careful preparation that brings out every line and reflection." }, { icon: Check, title: "Care plans", text: "A simple recommendation based on how you drive and what you want." }], steps: ["Inspect", "Prepare", "Protect", "Deliver"] },
} as const;

export default function Home() {
  const { locale } = useLocale();
  const t = content[locale];
  return <div className="site-shell">
    <a className="skip-link" href="#main-content">{locale === "ar" ? "انتقل للمحتوى" : "Skip to content"}</a>
    <SiteHeader />
    <main id="main-content">
      <CinematicHero />
      <ProtectionReveal />

      <section className="services-section" id="services"><div className="shell-width section-grid"><div className="section-intro"><p className="eyebrow"><span>{t.servicesLabel.slice(0, 2)}</span>{t.servicesLabel.slice(4)}</p><h2>{t.servicesTitle}</h2><p>{t.servicesLead}</p><Image src="/images/ppf-application.png" alt={locale === "ar" ? "تطبيق طبقة حماية شفافة على سيارة" : "Applying a clear protection layer to a car"} width={1448} height={1086} className="section-image" /></div><div className="service-list">{t.services.map(({ icon: Icon, title, text }, index) => <article className="service-card" key={title}><span className="service-index">0{index + 1}</span><Icon size={23} /><h3>{title}</h3><p>{text}</p><ArrowUpLeft className="service-arrow" size={19} /></article>)}</div></div></section>

      <section className="process-section" id="process"><div className="shell-width process-layout"><div><p className="eyebrow"><span>{t.processLabel.slice(0, 2)}</span>{t.processLabel.slice(4)}</p><h2>{t.processTitle}</h2><p className="process-lead">{t.processLead}</p></div><div className="process-steps">{t.steps.map((step, index) => <div className="process-step" key={step}><span>0{index + 1}</span><strong>{step}</strong><i /></div>)}</div></div></section>

      <section className="faq-section" id="faq"><div className="shell-width faq-layout"><div><p className="eyebrow"><span>04</span>FAQ</p><h2>{t.faqTitle}</h2><Image src="/images/paint-protection-detail.png" alt={locale === "ar" ? "لمعة وحماية على سطح سيارة داكنة" : "Gloss and protection on a dark car surface"} width={1672} height={941} className="faq-image" /></div><FaqList items={t.faq} /></div></section>

      <section className="contact-section"><div className="shell-width contact-card"><div><p className="eyebrow"><span>05</span>{locale === "ar" ? "خلينا نبدأ" : "Let's start"}</p><h2>{t.contactTitle}</h2><p>{t.contactLead}</p></div><div className="contact-actions"><a className="button button-bronze" href="https://wa.me/201100666717" target="_blank" rel="noreferrer"><MessageCircle size={18} />WhatsApp<ArrowUpLeft size={17} /></a><a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=SLS%20Car%20Paint%20Protection%20Film%20Zayed" target="_blank" rel="noreferrer"><MapPin size={17} />Maps</a></div></div></section>
    </main>
    <footer className="site-footer"><div className="shell-width footer-inner"><div className="footer-brand"><Image src="/images/sls-logo.png" alt="SLS" width={80} height={53} /><span>SLS</span><small>{t.footer}</small></div><div className="footer-right"><LocaleToggle /><p>The View Promenade · Sheikh Zayed · 011 00666717</p></div></div></footer>
  </div>;
}
