import { test, expect } from "@playwright/test";

const REACT_URL = "http://localhost:8791/react/";

test.describe("functionality", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page before each test
    await page.goto(REACT_URL);
  });

  test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/react-frontend/);
  });

  test("count button works", async ({ page }) => {
    // find the count button
    let countButton = page.getByRole("button", { name: /count is [0-9]+/ });
    await countButton.click();

    // Look for the re-rendered count button
    countButton = page.getByRole("button", { name: /count is [0-9]+/ });
    await expect(countButton).toContainText("count is 1");
  });

  test("fetch user data", async ({ page }) => {
    // find the search button
    let searchButton = page.getByRole("button", { name: "Get User" });
    // find the input
    let idInput = page.getByPlaceholder("user id");

    // input id 1001 then search
    await idInput.fill("1001");
    await searchButton.click();

    // Look for text of form firstName lastName (id: xxx)
    await expect(
      page.getByText(/[a-zA-Z]+ [a-zA-Z]+ \(id: [0-9]+\)/)
    ).toBeVisible();
  });
});
