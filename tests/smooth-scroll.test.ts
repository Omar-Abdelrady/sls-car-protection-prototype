import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const source = readFileSync(resolve(process.cwd(), "components/smooth-scroll.tsx"), "utf8");

describe("SmoothScroll configuration", () => {
  it("keeps anchor navigation smooth and respects reduced motion", () => {
    expect(source).toContain("anchors: { offset: -80 }");
    expect(source).toContain("respectReducedMotion: true");
  });
});
