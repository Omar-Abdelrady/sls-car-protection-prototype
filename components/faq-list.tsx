"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export function FaqList({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.question}>
            <button
              className="faq-trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <Plus aria-hidden="true" size={21} />
            </button>
            <div
              id={`faq-answer-${index}`}
              className="faq-answer"
              aria-hidden={!isOpen}
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
