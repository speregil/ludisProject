import { LudisProjectPage } from './app.po';

describe('ludis-project App', () => {
  let page: LudisProjectPage;

  beforeEach(() => {
    page = new LudisProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
