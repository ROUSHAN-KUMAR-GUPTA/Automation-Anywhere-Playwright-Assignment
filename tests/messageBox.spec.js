import { test, expect } from "@playwright/test";
import { MessageBoxPage } from "./pages/MessageBoxPage";

test("Create Message Box Task Bot", async ({ page }) => {

  await page.goto("https://community.cloud.automationanywhere.digital");

  // Login happens via existing session
  await page.waitForLoadState("networkidle");

  const msg = new MessageBoxPage(page);

  await msg.openBotCreator();
  await msg.addMessage("Hello from Playwright");
  await msg.saveBot();

  await expect(msg.successToast).toBeVisible();
});
