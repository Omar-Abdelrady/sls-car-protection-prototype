import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LocaleProvider } from "@/components/locale-toggle";
import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("renders a minimal navigation bar and keeps the mobile menu accessible", () => {
    render(
      <LocaleProvider>
        <SiteHeader />
      </LocaleProvider>,
    );

    expect(screen.getByRole("banner")).toHaveClass("site-header");
    expect(screen.getByRole("banner")).not.toHaveClass("garage-rail");
    expect(screen.getByRole("banner").querySelector(".header-float-shell")).not.toBeNull();
    expect(screen.getByRole("navigation", { name: "Primary navigation" }).querySelectorAll("a")).toHaveLength(3);
    expect(screen.getAllByRole("link", { name: /اطلب حماية/i })[0]).toHaveAttribute("href", expect.stringContaining("wa.me"));

    const menu = screen.getByRole("button", { name: "فتح القائمة" });
    expect(menu).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menu);

    expect(screen.getByRole("button", { name: "إغلاق القائمة" })).toHaveAttribute("aria-expanded", "true");
  });
});
