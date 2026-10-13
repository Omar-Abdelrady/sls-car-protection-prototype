import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CinematicHero } from "@/components/cinematic-hero";
import { LocaleProvider } from "@/components/locale-toggle";

describe("CinematicHero", () => {
  it("renders one primary heading, a protected car scene, and the primary CTA", () => {
    render(
      <LocaleProvider>
        <CinematicHero />
      </LocaleProvider>,
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("احمي");
    expect(screen.getByRole("heading", { level: 1 }).parentElement).toHaveClass("hero-copy-inner");
    expect(screen.getByRole("img", { name: /سيارة جرافيت/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /اطلب تقييم/i })).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me"),
    );
  });
});
