import { CompanyPageRoutingModule } from './company-page.routing.module';

describe('CompanyPageRoutingModule', () => {
  let dashboardModule: CompanyPageRoutingModule;

  beforeEach(() => {
    dashboardModule = new CompanyPageRoutingModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
