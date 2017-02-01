import { OrderCancellationPage } from './app.po';

describe('order-cancellation App', function() {
  let page: OrderCancellationPage;

  beforeEach(() => {
    page = new OrderCancellationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
