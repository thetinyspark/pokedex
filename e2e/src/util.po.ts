import { browser, by, element, ElementFinder } from 'protractor';

export class Util {

  public async pause(ms:number):Promise<void>{
    return browser.sleep(ms);
  }

  public async currentUrlContains(search:string):Promise<boolean>{
    const url:string = await browser.getCurrentUrl(); 
    return url.includes(search);
  }

  public async getRandomElementByCss(selector:string):Promise<any>{
      const all = element.all(by.css(selector)); 
      return all.count().then(
        (max) => {
          return all.get( Math.floor( Math.random() * max ))
        }
      );
  }

  public async navigateToHome(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  public async clickOnElementByCss(selector:string):Promise<void>{
    return element(by.css(selector)).click();
  }

  public async clickOnElementByCssContainingText(selector:string,search:string):Promise<void>{
    return element(by.cssContainingText(selector,search)).click();
  }

  public async typeOnElementByCss(selector:string, text:string):Promise<void>{
    return element(by.css(selector)).sendKeys(text);
  }

  public async navigateToCatalog():Promise<unknown>{
    return browser.get(browser.baseUrl+"/catalog");
  }

  public async getElementTextByCss(selector:string): Promise<string> {
    return element(by.css(selector)).getText();
  }

  public async getElementTextByCssContainingText(selector:string, containing:string): Promise<string> {
    return element(by.cssContainingText(selector, containing)).getText();
  }
}
