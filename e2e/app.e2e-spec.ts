import { JokesAndCounterServicePage } from './app.po';

describe('jokes-and-counter-service App', () => {
  let page: JokesAndCounterServicePage;

  beforeEach(() => {
    page = new JokesAndCounterServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
