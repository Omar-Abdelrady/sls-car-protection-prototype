import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AtelierPage from "@/app/atelier/page";
import { LocaleProvider } from "@/components/locale-toggle";

describe("AtelierPage", () => {
  it("renders the daylight route contract in Arabic and English", () => {
    render(
      <LocaleProvider>
        <AtelierPage />
      </LocaleProvider>,
    );

    expect(screen.getByRole("main")).toHaveAttribute("data-concept", "daylight-atelier");
    expect(screen.getByRole("heading", { level: 1, name: "حماية هادية. حضور يفضل واضح." })).toBeVisible();

    for (const id of ["services", "protection", "process", "faq", "contact"]) {
      expect(document.getElementById(id)).not.toBeNull();
    }

    expect(document.querySelector(".hero-cinematic")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "English" }));

    expect(screen.getByRole("heading", { level: 1, name: "Quiet protection. Lasting presence." })).toBeVisible();
  });
});
