export class MessageBoxPage {
  constructor(page) {
    this.page = page;

    // Dashboard navigation
    this.automationMenu = page.getByRole("link", { name: "Automation", exact: true });

    this.taskBotTile = page.locator('div:has-text("Task Bot")').first();

    // Bot builder
    this.activityPanel = page.locator('div.activity-panel');
    this.messageBox = page.locator('div.activity-panel >> text=Message Box').first();
    this.editor = page.locator('.bot-builder-canvas');

    this.textbox = page.locator('textarea');

    this.saveButton = page.locator('button:has-text("Save")');
    this.successToast = page.locator('text=Message Box Bot saved successfully');
  }

  async openBotCreator() {
    await this.automationMenu.click();
    await this.taskBotTile.click();
  }

  async addMessage(text) {
    await this.activityPanel.waitFor({ state: "visible", timeout: 30000 });
    await this.messageBox.scrollIntoViewIfNeeded();
    await this.messageBox.dragTo(this.editor);
    await this.textbox.fill(text);
  }


  async saveBot() {
    await this.saveButton.click();
  }
}
