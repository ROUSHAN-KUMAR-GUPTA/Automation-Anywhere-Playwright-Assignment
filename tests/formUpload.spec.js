import { test, expect } from "@playwright/test";
import { FormPage } from "./pages/FormPage";

test("Create Form and Upload Document", async ({ page }) => {

  await page.goto("https://community.cloud.automationanywhere.digital");
  await page.waitForLoadState("networkidle");

  const form = new FormPage(page);

  await form.openForms();
  await form.buildForm();

  await form.fillForm("Playwright User", "tests/sample.pdf");

  await form.saveForm();

  await expect(form.uploadSuccess).toBeVisible();
});
