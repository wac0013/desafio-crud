import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Desafio crud', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deve carregar titulo da página', () => {
    page.navigateTo();
    expect(page.getTituloPagina()).toEqual('Desafio-Crud');
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTituloNavBar()).toEqual('Desafio aceito');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
