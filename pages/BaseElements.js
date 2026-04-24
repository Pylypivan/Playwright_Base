export class BaseElements {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  getByRole(role, options = {}) {
    return this.page.getByRole(role, options);
  }

  getByTestId(id) {
    return this.page.getByTestId(id);
  }

  getByLabel(text) {
    return this.page.getByLabel(text);
  }

  getByPlaceholder(text) {
    return this.page.getByPlaceholder(text);
  }

  getByText(text) {
    return this.page.getByText(text);
  }

  getLocator(selector) {
    return this.page.locator(selector);
  }
}
