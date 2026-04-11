import { expect, test } from "@playwright/test";

test.describe("Navigator Onboarding Exercise — English", () => {
  test("Landing page shows Navigator persona card", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("The Navigator")).toBeVisible();
    await expect(
      page.getByText("Focused on results, not the tech behind them"),
    ).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/navigator-00-landing.png",
      fullPage: true,
    });
  });

  test("Step 1: Welcome page celebrates installation with SVG", async ({
    page,
  }) => {
    await page.goto("/navigator/welcome");
    await expect(
      page.getByRole("heading", { name: "You did it!" }),
    ).toBeVisible();
    await expect(page.getByText("everything from here is easy")).toBeVisible();
    await expect(page.getByText("Here's what we'll do together")).toBeVisible();
    // Navigator SVG illustration is present
    await expect(
      page.locator(
        'svg[aria-label="The Navigator — a figure holding a compass"]',
      ),
    ).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/navigator-01-welcome.png",
      fullPage: true,
    });
  });

  test("Step 2: Open page shows claude command with copy button", async ({
    page,
  }) => {
    await page.goto("/navigator/open");
    await expect(
      page.getByRole("heading", { name: "Open Claude Code" }),
    ).toBeVisible();
    // Terminal mockup with claude command
    await expect(
      page.locator(".text-slate-200", { hasText: "claude" }),
    ).toBeVisible();
    // Help text for finding Terminal
    await expect(page.getByText("Can't find the black window?")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/navigator-02-open.png",
      fullPage: true,
    });
  });

  test("Step 3: Prompt page shows copyable prompt text", async ({ page }) => {
    await page.goto("/navigator/prompt");
    await expect(
      page.getByRole("heading", {
        name: "Ask Claude to build your webpage",
      }),
    ).toBeVisible();
    // The prompt text is visible
    await expect(
      page.getByText("Create a personal webpage about me"),
    ).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/navigator-03-prompt.png",
      fullPage: true,
    });
  });

  test("Step 4: Watch page has transparency and error framing", async ({
    page,
  }) => {
    await page.goto("/navigator/watch");
    await expect(
      page.getByRole("heading", {
        name: "Claude is building your webpage",
      }),
    ).toBeVisible();
    // Transparency section (Craftsman-inspired)
    await expect(
      page.getByText("What Claude is doing right now"),
    ).toBeVisible();
    await expect(
      page.getByText("Reading your request and understanding what you want"),
    ).toBeVisible();
    // Pre-emptive error framing
    await expect(
      page.getByText("If you see a question asking for permission"),
    ).toBeVisible();
    await expect(page.getByText("If you see red or yellow text")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/navigator-04-watch.png",
      fullPage: true,
    });
  });

  test("Step 5: Result page shows open command", async ({ page }) => {
    await page.goto("/navigator/result");
    await expect(
      page.getByRole("heading", { name: "Open your new webpage" }),
    ).toBeVisible();
    await expect(
      page.locator(".text-slate-200", { hasText: "open index.html" }),
    ).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/navigator-05-result.png",
      fullPage: true,
    });
  });

  test("Step 6: Celebrate page shows accomplishments and personalization", async ({
    page,
  }) => {
    await page.goto("/navigator/celebrate");
    await expect(
      page.getByRole("heading", {
        name: "You just built a webpage!",
      }),
    ).toBeVisible();
    // Navigator SVG illustration
    await expect(
      page.locator(
        'svg[aria-label="The Navigator — a figure holding a compass"]',
      ),
    ).toBeVisible();
    // Accomplishment framing (Strategist-inspired)
    await expect(
      page.getByText("Look what you just accomplished"),
    ).toBeVisible();
    await expect(
      page.getByText("You gave an instruction in plain English"),
    ).toBeVisible();
    // Personalization micro-exercise (Builder-inspired)
    await expect(page.getByText("Make it yours")).toBeVisible();
    await expect(page.getByText("Change the background color")).toBeVisible();
    // Next step ideas still present
    await expect(page.getByText("Want to try more?")).toBeVisible();
    await expect(page.getByText("Write a thank-you email")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/navigator-06-celebrate.png",
      fullPage: true,
    });
  });

  test("Full navigator flow — navigate forward through all steps", async ({
    page,
  }) => {
    // Landing → click Navigator card
    await page.goto("/");
    const navigatorCard = page
      .locator("a", { hasText: "The Navigator" })
      .first();
    await navigatorCard.click();
    await page.waitForURL("**/navigator/welcome");

    // Welcome → click Let's go
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/navigator/open");

    // Open → click Next
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/navigator/prompt");

    // Prompt → click Next
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/navigator/watch");

    // Watch → click Next
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/navigator/result");

    // Result → click Next
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/navigator/celebrate");

    await expect(page.locator("h1").first()).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/navigator-full-flow-complete.png",
      fullPage: true,
    });
  });
});

test.describe("Navigator Onboarding Exercise — Swedish", () => {
  test("Landing page shows Navigator persona card in Swedish", async ({
    page,
  }) => {
    await page.goto("/sv/");
    await expect(page.getByText("Navigatören")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/sv/navigator-00-landing.png",
      fullPage: true,
    });
  });

  test("Step 1: Welcome page in Swedish", async ({ page }) => {
    await page.goto("/sv/navigator/welcome");
    await expect(page.locator("h1").first()).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/sv/navigator-01-welcome.png",
      fullPage: true,
    });
  });

  test("Step 3: Prompt page in Swedish", async ({ page }) => {
    await page.goto("/sv/navigator/prompt");
    await expect(page.locator("h1").first()).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/sv/navigator-03-prompt.png",
      fullPage: true,
    });
  });

  test("Step 6: Celebrate page in Swedish", async ({ page }) => {
    await page.goto("/sv/navigator/celebrate");
    await expect(page.locator("h1").first()).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/sv/navigator-06-celebrate.png",
      fullPage: true,
    });
  });
});

test.describe("Navigator Navigation", () => {
  test("Back button navigates to previous step", async ({ page }) => {
    await page.goto("/navigator/prompt");
    await page.getByRole("link", { name: "Back" }).click();
    await page.waitForURL("**/navigator/open");
  });

  test("Progress bar advances through navigator steps", async ({ page }) => {
    await page.goto("/navigator/welcome");
    const progressBar = page.locator(".bg-indigo-500.rounded-full.h-full");
    const style1 = await progressBar.getAttribute("style");

    await page.goto("/navigator/result");
    const style5 = await progressBar.getAttribute("style");

    // Step 5 should have wider progress bar than step 1
    expect(style1).not.toEqual(style5);
  });
});
