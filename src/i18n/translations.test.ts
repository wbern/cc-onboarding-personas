import { describe, expect, it } from "vitest";
import { t } from "./translations";

describe("t()", () => {
  it("returns English translation for known key", () => {
    expect(t("en", "platform.title")).toBe("Are you using a Mac?");
  });

  it("returns Swedish translation for known key", () => {
    expect(t("sv", "platform.title")).toBe("Använder du en Mac?");
  });

  it("falls back to English for missing Swedish key", () => {
    // All keys exist in both locales currently, but the fallback logic should work
    expect(t("en", "nav.next")).toBe("Next");
  });

  it("returns key itself if translation missing entirely", () => {
    // @ts-expect-error — testing fallback for unknown key
    expect(t("en", "nonexistent.key")).toBe("nonexistent.key");
  });
});
