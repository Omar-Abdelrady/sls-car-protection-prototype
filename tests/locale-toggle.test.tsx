import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LocaleProvider, LocaleToggle } from "@/components/locale-toggle";

describe("LocaleToggle", () => {
  it("switches the document direction between Arabic and English", () => {
    render(
      <LocaleProvider>
        <LocaleToggle />
      </LocaleProvider>,
    );

    expect(document.documentElement).toHaveAttribute("dir", "rtl");

    fireEvent.click(screen.getByRole("button", { name: "English" }));

    expect(document.documentElement).toHaveAttribute("dir", "ltr");
    expect(screen.getByRole("button", { name: "العربية" })).toBeVisible();
  });
});
