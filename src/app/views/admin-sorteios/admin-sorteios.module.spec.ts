import { AdminSorteiosModule } from './admin-sorteios.module';

describe('AdminSorteiosModule', () => {
  let adminSorteiosModule: AdminSorteiosModule;

  beforeEach(() => {
    adminSorteiosModule = new AdminSorteiosModule();
  });

  it('should create an instance', () => {
    expect(adminSorteiosModule).toBeTruthy();
  });
});
