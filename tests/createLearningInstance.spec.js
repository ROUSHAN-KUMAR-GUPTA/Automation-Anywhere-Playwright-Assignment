import { test, expect } from "@playwright/test";

test("Create Learning Instance using Automation Anywhere session", async ({ page }) => {
  
  // 1. Open Automation Anywhere
  await page.goto("https://community.cloud.automationanywhere.digital");

  // 2. You are already logged in via browser session
  await page.waitForLoadState("networkidle");

  // 3. Execute API inside browser context
  const response = await page.evaluate(async () => {
    const res = await fetch("/cognitive/v3/learninginstances", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: "PlaywrightAI",
        description: "",
        domainId: "33DED827-3DC4-4201-B478-7C15B94AF522",
        domainLanguageId: "B62EFA19-3592-4D2B-910A-E9C1C7DAE1A9",
        domainLanguageProviderId: "D6CCA488-207A-4FCA-94E0-74E2FCA38B40",
        locale: "en-US",
        isCloudExtraction: false,
        isDefault: true,
        isGenAIEnabled: true,
        isHeuristicFeedbackEnabled: true,
        genaiProvider: "Open_AI",
        genaiFeature: { tableFieldSupported: true },
        rules: [],
        fields: [
          {
            name: "InvoiceNumber",
            description: "",
            dataType: "STRING",
            isKey: true,
            isRequired: true,
            isConfidenceEnabled: false
          }
        ],
        tables: [{ name: "table", description: "", columns: [] }]
      })
    });
    return await res.json();
  });

  console.log(response);

  expect(response.name).toBe("PlaywrightAI");
});
