import { AishClientPage } from './app.po';

describe('aish-client App', () => {
  let page: AishClientPage;

  beforeEach(() => {
    page = new AishClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
