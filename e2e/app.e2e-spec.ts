import { BlfrontPage } from './app.po';

describe('blfront App', () => {
  let page: BlfrontPage;

  beforeEach(() => {
    page = new BlfrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
