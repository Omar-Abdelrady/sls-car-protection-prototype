import { describe, expect, it } from "vitest";
import { mapPointerToDepth } from "@/components/hero-depth";

describe("mapPointerToDepth", () => {
  it("maps pointer positions into a clamped centered depth range", () => {
    expect(mapPointerToDepth(500, 250, 1000, 500)).toEqual({ x: 0, y: 0 });
    expect(mapPointerToDepth(0, 0, 1000, 500)).toEqual({ x: -1, y: -1 });
    expect(mapPointerToDepth(1200, 700, 1000, 500)).toEqual({ x: 1, y: 1 });
  });

  it("falls back to a stable center when dimensions are unavailable", () => {
    expect(mapPointerToDepth(20, 40, 0, 0)).toEqual({ x: 0, y: 0 });
  });
});
