import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LocaleProvider } from "@/components/locale-toggle";
import { AtelierFaq } from "@/components/atelier/atelier-faq";

describe("AtelierFaq", () => {
  it("opens the getting-started answer and provides verified contact links", () => {
    render(
      <LocaleProvider>
        <AtelierFaq />
      </LocaleProvider>,
    );

    const questions = screen.getAllByRole("button").filter((button) => button.hasAttribute("aria-expanded"));
    expect(questions.length).toBeGreaterThan(0);
    for (const question of questions) {
      expect(question).toHaveAttribute("aria-expanded", "false");
    }

    const gettingStarted = screen.getByRole("button", { name: "أبدأ إزاي؟" });
    fireEvent.click(gettingStarted);

    expect(gettingStarted).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/موديل العربية/i)).toBeVisible();
    expect(document.querySelector('a[href="https://wa.me/201100666717"]')).not.toBeNull();
    expect(document.querySelector('a[href="tel:+201100666717"]')).not.toBeNull();
    expect(
      document.querySelector(
        'a[href="https://www.google.com/maps/search/?api=1&query=SLS%20Car%20Paint%20Protection%20Film%20Zayed"]',
      ),
    ).not.toBeNull();
  });
});
