import { AdminUsuariosModule } from './admin-usuarios.module';

describe('AdminUsuariosModule', () => {
  let adminUsuariosModule: AdminUsuariosModule;

  beforeEach(() => {
    adminUsuariosModule = new AdminUsuariosModule();
  });

  it('should create an instance', () => {
    expect(adminUsuariosModule).toBeTruthy();
  });
});
