import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { LocaleProvider } from "@/components/locale-toggle";

describe("SLS editorial sections", () => {
  it("gives the process and FAQ stories dedicated visual panels", () => {
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: () => ({ matches: false, addEventListener: () => undefined, removeEventListener: () => undefined }),
    });

    render(
      <LocaleProvider>
        <Home />
      </LocaleProvider>,
    );

    expect(document.querySelector(".process-showcase")).not.toBeNull();
    expect(screen.getByRole("img", { name: /سيارة أثناء تركيب حماية الطلاء/i })).toBeVisible();
    expect(document.querySelector(".faq-panel")).not.toBeNull();
    expect(screen.getByRole("heading", { name: "أسئلة قبل الزيارة" })).toBeVisible();
  });
});
