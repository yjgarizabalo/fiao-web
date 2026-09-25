import { useState } from "react";
import type { FaqItem } from "@/data/landing";

export interface FAQAccordionProps {
  items: FaqItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="rounded-2xl border border-border bg-surface overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold text-ink-900"
            >
              <span>{item.question}</span>
              <span
                className={`shrink-0 transition-transform duration-200 text-brand-500 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {/* Truco de grid-rows para animar el alto sin medir el DOM a mano */}
            <div
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
              aria-hidden={!isOpen}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-ink-500 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
