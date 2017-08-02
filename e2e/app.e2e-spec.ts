import { InfinityCalculatorPage } from './app.po';

describe('infinity-calculator App', () => {
  let page: InfinityCalculatorPage;

  beforeEach(() => {
    page = new InfinityCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
