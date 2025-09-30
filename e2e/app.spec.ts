import { test, expect } from "@playwright/test";

test.describe("Portfolio site e2e", () => {
  test("Home page renders correctly", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /Enes Tekin/i }),
    ).toBeVisible();
    await expect(
      page.getByText(
        /Creating modern web apps that balance speed, design, and functionality with real impact./i,
      ),
    ).toBeVisible();

    await expect(
      page.getByRole("link", { name: /Read blog posts by Enes Tekin/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Say hello to Enes Tekin/i }),
    ).toBeVisible();
  });

  test("Navbar links navigate correctly", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: /About/i }).click();
    await expect(page).toHaveURL(/.*about/);
    await expect(page.getByRole("heading", { name: /About/i })).toBeVisible();

    await page.getByRole("link", { name: /Uses/i }).click();
    await expect(page).toHaveURL(/.*uses/);
    await expect(
      page.getByRole("heading", { name: /What Enes Uses/i }),
    ).toBeVisible();

    await page.getByRole("link", { name: /Resume/i }).click();
    await expect(page).toHaveURL(/.*resume/);
    await expect(page.getByRole("heading", { name: /Resume/i })).toBeVisible();

    await page.getByRole("link", { name: /Blog/i }).click();
    await expect(page).toHaveURL(/.*blog/);
    await expect(page.getByRole("heading", { name: /Blog/i })).toBeVisible();

    await page
      .locator("nav")
      .getByRole("link", { name: /Say Hello/i })
      .click();
    await expect(page).toHaveURL(/.*contact/);
    await expect(
      page.getByRole("heading", { name: /Get in Touch/i }),
    ).toBeVisible();
  });

  test("Blog flow works (list → detail)", async ({ page }) => {
    await page.goto("/blog");

    const firstPost = page.locator("section > div > a").first();

    await expect(firstPost).toBeVisible();

    await firstPost.click();

    await expect(page).toHaveURL(/\/blog\/.+/);

    const postHeading = page.locator("article h1, article h2").first();
    await expect(postHeading).toBeVisible();
  });

  test("Say Hello page shows social links", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.getByRole("link", { name: /Twitter/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /LinkedIn/i })).toBeVisible();
    await expect(
      page.getByRole("link", { name: /zenestekin@gmail.com/i }),
    ).toBeVisible();
  });

  test("Resume page has CV download link", async ({ page }) => {
    await page.goto("/resume");

    await expect(
      page.getByRole("link", { name: /download my CV/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /download my CV/i }),
    ).toHaveAttribute("href", "/enestekin.pdf");
  });
});
