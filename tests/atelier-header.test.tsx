import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LocaleProvider } from "@/components/locale-toggle";
import { AtelierHeader } from "@/components/atelier/atelier-header";

describe("AtelierHeader", () => {
  it("renders the atelier navigation and exposes its mobile links accessibly", () => {
    render(
      <LocaleProvider>
        <AtelierHeader />
      </LocaleProvider>,
    );

    expect(screen.getByRole("banner")).toHaveAttribute("data-variant", "atelier");

    const navigation = screen.getAllByRole("navigation").find((element) => element.querySelector('a[href="#services"]'));
    expect(navigation).toBeDefined();
    for (const id of ["services", "protection", "process", "faq"]) {
      expect(navigation?.querySelector(`a[href="#${id}"]`)).not.toBeNull();
    }

    expect(document.querySelector('a[href*="wa.me"]')).not.toBeNull();

    const menu = screen.getByRole("button", { name: "فتح القائمة" });
    expect(menu).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(menu);

    expect(menu).toHaveAttribute("aria-expanded", "true");
    const mobileMenu = document.getElementById(menu.getAttribute("aria-controls") ?? "");
    expect(mobileMenu).not.toBeNull();
    for (const id of ["services", "protection", "process", "faq"]) {
      expect(mobileMenu?.querySelector(`a[href="#${id}"]`)).not.toBeNull();
    }
  });
});
