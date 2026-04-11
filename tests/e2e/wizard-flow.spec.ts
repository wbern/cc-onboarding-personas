import { expect, test } from "@playwright/test";

test.describe("Builder Onboarding Wizard — English", () => {
  test("Step 0: Landing page shows Builder persona card", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Welcome to Agentic Onboarding" }),
    ).toBeVisible();
    await expect(page.getByText("The Builder")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/00-landing.png",
      fullPage: true,
    });
  });

  test("Step 1: Platform check — Mac auto-detected", async ({ page }) => {
    await page.goto("/builder/platform");
    await expect(page.locator("#btn-yes")).toBeVisible();
    await expect(page.locator("#btn-no")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/01-platform.png",
      fullPage: true,
    });
  });

  test("Step 1: Platform check — Yes click gives feedback and navigates", async ({
    page,
  }) => {
    await page.goto("/builder/platform");
    await page.locator("#btn-yes").click();

    // Should show visual feedback (scale + highlight)
    await expect(page.locator("#btn-yes")).toHaveClass(/scale-105/);
    await expect(page.locator("#btn-no")).toHaveClass(/opacity-40/);

    await page.screenshot({
      path: "tests/e2e/screenshots/en/01-platform-yes-clicked.png",
      fullPage: true,
    });

    // Should navigate to terminal page after delay
    await page.waitForURL("**/builder/terminal", { timeout: 2000 });
  });

  test("Step 1: Platform check — No click shows message", async ({ page }) => {
    await page.goto("/builder/platform");
    await page.locator("#btn-no").click();

    await expect(page.locator("#not-mac-message")).toBeVisible();
    await expect(page.locator("#btn-yes")).toHaveClass(/opacity-40/);

    await page.screenshot({
      path: "tests/e2e/screenshots/en/01-platform-no-clicked.png",
      fullPage: true,
    });
  });

  test("Step 2: Terminal page shows key visuals", async ({ page }) => {
    await page.goto("/builder/terminal");
    await expect(page.locator("h1").first()).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/02-terminal.png",
      fullPage: true,
    });
  });

  test("Step 3: Install page shows copy command", async ({ page }) => {
    await page.goto("/builder/install");
    await expect(
      page.getByRole("heading", { name: "Install Claude Code" }),
    ).toBeVisible();
    // Terminal mockup with install command
    await expect(
      page.locator(".text-slate-200", { hasText: "curl -fsSL" }),
    ).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/03-install.png",
      fullPage: true,
    });
  });

  test("Step 4: Run page shows paste instructions", async ({ page }) => {
    await page.goto("/builder/run");
    await expect(page.locator("h1").first()).toBeVisible();
    // Terminal mockup present
    await expect(page.getByText("Terminal", { exact: true })).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/04-run.png",
      fullPage: true,
    });
  });

  test("Step 5: Theme page shows theme picker", async ({ page }) => {
    await page.goto("/builder/theme");
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.getByText("Dark (default)")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/05-theme.png",
      fullPage: true,
    });
  });

  test("Step 6: Login page shows auth options", async ({ page }) => {
    await page.goto("/builder/login");
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.getByText("Anthropic (claude.ai account)")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/06-login.png",
      fullPage: true,
    });
  });

  test("Step 7: Exercise page shows first build exercise", async ({ page }) => {
    await page.goto("/builder/exercise");
    await expect(
      page.getByRole("heading", { name: "Your First Build" }),
    ).toBeVisible();
    await expect(
      page.locator(".text-slate-200", { hasText: "mkdir my-project" }),
    ).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/07-exercise.png",
      fullPage: true,
    });
  });

  test("Step 8: Ready page shows completion", async ({ page }) => {
    await page.goto("/builder/ready");
    await expect(page.locator("h1").first()).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/08-ready.png",
      fullPage: true,
    });
  });

  test("Full wizard flow — navigate forward through all steps", async ({
    page,
  }) => {
    // Landing → click Builder card link
    await page.goto("/");
    await page.getByText("Start your journey").click();
    await page.waitForURL("**/builder/platform");

    // Platform → click Yes
    await page.locator("#btn-yes").click();
    await page.waitForURL("**/builder/terminal", { timeout: 2000 });

    // Terminal → click Next
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/builder/install");

    // Install → click Next
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/builder/run");

    // Run → click Next
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/builder/theme");

    // Theme → click Next
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/builder/login");

    // Login → click Next
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/builder/exercise");

    // Exercise → click Next
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/builder/ready");

    await expect(page.locator("h1").first()).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/full-flow-complete.png",
      fullPage: true,
    });
  });
});

test.describe("Builder Onboarding Wizard — Swedish", () => {
  test("Step 0: Landing page shows Builder persona card in Swedish", async ({
    page,
  }) => {
    await page.goto("/sv/");
    await expect(page.getByText("Byggaren")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/sv/00-landing.png",
      fullPage: true,
    });
  });

  test("Step 1: Platform check in Swedish", async ({ page }) => {
    await page.goto("/sv/builder/platform");
    await expect(page.locator("h1").first()).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/sv/01-platform.png",
      fullPage: true,
    });
  });

  test("Step 2: Install page in Swedish", async ({ page }) => {
    await page.goto("/sv/builder/install");
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(
      page.locator(".text-slate-200", { hasText: "curl -fsSL" }),
    ).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/sv/02-install.png",
      fullPage: true,
    });
  });

  test("Step 7: Exercise page in Swedish", async ({ page }) => {
    await page.goto("/sv/builder/exercise");
    await expect(page.locator("h1").first()).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/sv/07-exercise.png",
      fullPage: true,
    });
  });

  test("Step 8: Ready page in Swedish", async ({ page }) => {
    await page.goto("/sv/builder/ready");
    await expect(page.locator("h1").first()).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/sv/08-ready.png",
      fullPage: true,
    });
  });
});

test.describe("Craftsman Onboarding Wizard", () => {
  test("Landing page shows Craftsman persona card", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("The Craftsman")).toBeVisible();
    await expect(
      page.getByText("Earned every line. Evaluates every tool."),
    ).toBeVisible();
  });

  test("Step 1: Why page shows transparency details", async ({ page }) => {
    await page.goto("/craftsman/why");
    await expect(
      page.getByRole("heading", { name: "See it work before you trust it" }),
    ).toBeVisible();
    await expect(page.getByText("What happens under the hood")).toBeVisible();
    await expect(page.getByText("Where it falls short")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/craftsman-01-why.png",
      fullPage: true,
    });
  });

  test("Step 2: Exercise page shows buggy code", async ({ page }) => {
    await page.goto("/craftsman/exercise");
    await expect(
      page.getByRole("heading", { name: "Debug this" }),
    ).toBeVisible();
    await expect(page.getByText("task_queue.py")).toBeVisible();
    await expect(page.getByText("process_with_retry")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/craftsman-02-exercise.png",
      fullPage: true,
    });
  });

  test("Step 2: Bug hints are collapsed by default", async ({ page }) => {
    await page.goto("/craftsman/exercise");
    const details = page.locator("details");
    await expect(details).not.toHaveAttribute("open");
    // Click to expand
    await details.locator("summary").click();
    await expect(page.getByText("Infinite retry loop")).toBeVisible();
    await expect(page.getByText("Shared state without locking")).toBeVisible();
  });

  test("Step 3: Verify page shows evaluation criteria", async ({ page }) => {
    await page.goto("/craftsman/verify");
    await expect(
      page.getByRole("heading", { name: "Check the work" }),
    ).toBeVisible();
    await expect(page.getByText("How to judge the output")).toBeVisible();
    await expect(page.getByText("Form your own opinion")).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/craftsman-03-verify.png",
      fullPage: true,
    });
  });

  test("Full craftsman flow — navigate forward through all steps", async ({
    page,
  }) => {
    // Landing → click Craftsman card link
    await page.goto("/");
    const craftsmanCard = page.locator("a", {
      hasText: "The Craftsman",
    });
    await craftsmanCard.click();
    await page.waitForURL("**/craftsman/why");

    // Why → click "Try the exercise"
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/craftsman/exercise");

    // Exercise → click "How to verify"
    await page.locator("#wizard-next").click();
    await page.waitForURL("**/craftsman/verify");

    await expect(page.locator("h1").first()).toBeVisible();
    await page.screenshot({
      path: "tests/e2e/screenshots/en/craftsman-full-flow-complete.png",
      fullPage: true,
    });
  });
});

test.describe("Navigation", () => {
  test("Back button navigates to previous step", async ({ page }) => {
    await page.goto("/builder/install");
    // Back link in the wizard nav — install's back goes to terminal
    await page.getByRole("link", { name: "Back" }).click();
    await page.waitForURL("**/builder/terminal");
  });

  test("Language switcher toggles between EN and SV", async ({ page }) => {
    await page.goto("/");
    // Click SV link in the language switcher (exact match)
    await page.getByRole("link", { name: "SV", exact: true }).click();
    await page.waitForURL("**/sv/");
    await expect(page.getByText("Byggaren")).toBeVisible();

    // Click EN to go back (exact match)
    await page.getByRole("link", { name: "EN", exact: true }).click();
    await page.waitForURL(/\/$/);
    await expect(page.getByText("The Builder")).toBeVisible();
  });

  test("Progress bar advances through steps", async ({ page }) => {
    await page.goto("/builder/platform");
    // Progress bar is the inner div with bg-indigo-500
    const progressBar = page.locator(".bg-indigo-500.rounded-full.h-full");
    const style1 = await progressBar.getAttribute("style");

    await page.goto("/builder/theme");
    const style5 = await progressBar.getAttribute("style");

    // Step 5 should have wider progress bar than step 1
    expect(style1).not.toEqual(style5);
  });
});
