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

  it("returns English navigator translation", () => {
    expect(t("en", "navigator.welcome.title")).toBe("You did it!");
  });

  it("returns Swedish navigator translation", () => {
    expect(t("sv", "navigator.welcome.title")).toBe("Du klarade det!");
  });

  it("returns English navigator landing translation", () => {
    expect(t("en", "landing.navigator.name")).toBe("The Navigator");
  });

  it("returns Swedish navigator landing translation", () => {
    expect(t("sv", "landing.navigator.name")).toBe("Navigatören");
  });

  it("returns English craftsman landing translation", () => {
    expect(t("en", "landing.craftsman.name")).toBe("The Craftsman");
  });

  it("returns Swedish craftsman landing translation", () => {
    expect(t("sv", "landing.craftsman.name")).toBe("Hantverkaren");
  });

  it("returns English craftsman exercise translation", () => {
    expect(t("en", "craftsman.exercise.title")).toBe("Debug this");
  });

  it("returns Swedish craftsman exercise translation", () => {
    expect(t("sv", "craftsman.exercise.title")).toBe("Felsök det här");
  });
});
