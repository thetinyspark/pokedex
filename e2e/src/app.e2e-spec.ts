import { browser, logging } from 'protractor';
import { Util } from './util.po';

describe('workspace-project App', () => {
  let page: Util;

  beforeEach(() => {
    page = new Util();
  });

  fit(
    'should display welcome message',
    async () => {
      await page.navigateToHome();
      expect(await page.getElementTextByCss("h1")).toEqual('pokedex');
      await page.pause(2000);
    }
  );

  fit(
    'should navigate to catalog',
    async () => {
      await page.navigateToCatalog();
      expect(await page.currentUrlContains("catalog")).toEqual(true);
      await page.pause(2000);
    }
  );

  fit(
    'should filter pokemons by type',
    async () => {
      const type:string = "Feu";
      await page.navigateToCatalog();
      await page.clickOnElementByCss("select");
      await page.clickOnElementByCssContainingText("option", type);

      const pokemonTitle:string = await page.getElementTextByCss("app-pokemon h2");
      expect(pokemonTitle).toContain(type);
      await page.pause(2000);
    }
  );

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
