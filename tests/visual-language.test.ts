import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const styles = readFileSync(resolve(process.cwd(), "app/globals.css"), "utf8");

describe("SLS industrial visual language", () => {
  it("defines the sharp automotive palette instead of the clinic paper system", () => {
    expect(styles).toContain("--sls-orange");
    expect(styles).toContain("--radius-sharp");
    expect(styles).not.toContain("background:var(--paper)");
  });
});
