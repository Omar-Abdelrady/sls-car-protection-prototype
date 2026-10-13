"use client";

import { useState } from "react";
import { MapPin, MessageCircle, Minus, Phone, Plus } from "lucide-react";
import { useLocale } from "@/components/locale-toggle";
import styles from "./atelier-faq.module.css";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=SLS%20Car%20Paint%20Protection%20Film%20Zayed";

const content = {
  ar: {
    eyebrow: "إجابات واضحة",
    title: "قبل ما تبدأ",
    intro: "لو عندك سؤال عن الخطوة الأولى أو المكان، إحنا هنا نسهّلها عليك.",
    questions: [
      {
        question: "أبدأ إزاي؟",
        answer: "ابعتلنا موديل العربية وصورة ليها على واتساب، وهنكلمك عن الخطوة المناسبة.",
      },
      {
        question: "المكان فين؟",
        answer: "هتلاقينا في The View Promenade، بعد Gate 4 في الشيخ زايد.",
      },
      {
        question: "أحجز إزاي؟",
        answer: "ابعتلنا على واتساب أو اتصل بينا على 011 00666717 علشان نرتب زيارتك.",
      },
    ],
    contactEyebrow: "خلينا نبدأ",
    contactTitle: "خطوتك الجاية تبدأ بسؤال.",
    contactText: "ابعتلنا موديل عربيتك وصورة، أو اختار الطريقة الأنسب للتواصل.",
    whatsapp: "ابدأ محادثة واتساب",
    phone: "اتصل بينا",
    maps: "افتح الخريطة",
  },
  en: {
    eyebrow: "Clear answers",
    title: "Before you begin",
    intro: "Questions about getting started or finding us? We are here to make it simple.",
    questions: [
      {
        question: "How do I get started?",
        answer: "Send us your car model and a photo on WhatsApp, and we will guide you to the right next step.",
      },
      {
        question: "Where are you located?",
        answer: "You can find us at The View Promenade, after Gate 4 in Sheikh Zayed.",
      },
      {
        question: "How can I book?",
        answer: "Message us on WhatsApp or call 011 00666717 to arrange your visit.",
      },
    ],
    contactEyebrow: "Let’s get started",
    contactTitle: "Your next step starts with a question.",
    contactText: "Send us your car model and a photo, or choose the easiest way to reach us.",
    whatsapp: "Start a WhatsApp chat",
    phone: "Call us",
    maps: "Open the map",
  },
} as const;

export function AtelierFaq() {
  const { locale } = useLocale();
  const t = content[locale];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className={styles.faq} id="faq" aria-labelledby="atelier-faq-title">
        <div className={styles.faqInner}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h2 id="atelier-faq-title">{t.title}</h2>
            <p className={styles.lead}>{t.intro}</p>
          </div>

          <div className={styles.questions}>
            {t.questions.map(({ question, answer }, index) => {
              const isOpen = openIndex === index;
              const answerId = `atelier-faq-answer-${index + 1}`;

              return (
                <article className={styles.item} key={question}>
                  <h3 className={styles.questionHeading}>
                    <button
                      className={styles.trigger}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span>{question}</span>
                      <span className={styles.icon} aria-hidden="true">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>
                  </h3>
                  <div
                    className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                    id={answerId}
                    inert={!isOpen}
                  >
                    <div className={styles.answerInner}>
                      <p>{answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.contact} id="contact" aria-labelledby="atelier-contact-title">
        <div className={styles.contactInner}>
          <div className={styles.contactCopy}>
            <p className={styles.contactEyebrow}>{t.contactEyebrow}</p>
            <h2 id="atelier-contact-title">{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>
          <div className={styles.actions}>
            <a href="https://wa.me/201100666717" target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              {t.whatsapp}
            </a>
            <a href="tel:+201100666717">
              <Phone size={18} aria-hidden="true" />
              {t.phone}
            </a>
            <a href={mapUrl} target="_blank" rel="noreferrer">
              <MapPin size={18} aria-hidden="true" />
              {t.maps}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
