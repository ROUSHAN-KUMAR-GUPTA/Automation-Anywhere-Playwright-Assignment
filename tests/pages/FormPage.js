export class FormPage {
  constructor(page) {
    this.page = page;

    this.automationMenu = page.getByRole("link", { name: "Automation", exact: true });
    this.formsTile = page.locator('div:has-text("Forms")').first();

    this.textField = page.locator('div:has-text("Text")').first();
    this.fileUpload = page.locator('div:has-text("File")').first();
    this.canvas = page.locator('.form-builder-canvas');

    this.nameInput = page.locator('input[type="text"]');
    this.fileInput = page.locator('input[type="file"]');

    this.saveButton = page.locator('button:has-text("Save")');
    this.uploadSuccess = page.locator('text=Upload');
  }

  async openForms() {
    await this.automationMenu.click();
    await this.formsTile.click();
  }

  async buildForm() {
    await this.textField.click();
    await this.fileUpload.click();
  }

  async fillForm(name, filePath) {
    await this.nameInput.fill(name);
    await this.fileInput.setInputFiles(filePath);
  }

  async saveForm() {
    await this.saveButton.click();
  }
}
