import { MyAncestorsFrontPage } from './app.po';

describe('my-ancestors-front App', () => {
  let page: MyAncestorsFrontPage;

  beforeEach(() => {
    page = new MyAncestorsFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
