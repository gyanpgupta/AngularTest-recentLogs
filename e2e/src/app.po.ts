import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('');
  }

  getRecord():ElementFinder {
    return element(by.css('.record'));
  }

  getTitleText() {
    return element(by.css('app-records .container .row h6')).getText();
  }

  getTableHeader() {
    return this.getRecord().all(by.tagName('tr')).get(0).getText();
  }

  getTableRow(): ElementArrayFinder {
		return this.getRecord().all(by.tagName('tr'));
	}

  getFirstRowData() {
    return this.getTableRow().get(1).getText();
  }
}
