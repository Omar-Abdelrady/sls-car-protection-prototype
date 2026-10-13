import { describe, expect, it } from "vitest";
import { clampRevealProgress } from "@/components/reveal-progress";

describe("clampRevealProgress", () => {
  it("maps the section viewport journey to a 0-100 reveal percentage", () => {
    expect(clampRevealProgress(0, 1000, 500, 0)).toBe(0);
    expect(clampRevealProgress(0, 1000, 500, 250)).toBe(50);
    expect(clampRevealProgress(0, 1000, 500, 500)).toBe(100);
  });

  it("never exposes values outside the reveal range", () => {
    expect(clampRevealProgress(200, 900, 600, -400)).toBe(0);
    expect(clampRevealProgress(200, 900, 600, 2000)).toBe(100);
  });
});
