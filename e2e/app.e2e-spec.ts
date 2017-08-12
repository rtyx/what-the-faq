import { WhatTheFaqPage } from './app.po';

describe('what-the-faq App', () => {
  let page: WhatTheFaqPage;

  beforeEach(() => {
    page = new WhatTheFaqPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
