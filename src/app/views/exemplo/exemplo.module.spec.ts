import { ExemploModule } from './exemplo.module';

describe('ExemploModule', () => {
  let exemploModule: ExemploModule;

  beforeEach(() => {
    exemploModule = new ExemploModule();
  });

  it('should create an instance', () => {
    expect(exemploModule).toBeTruthy();
  });
});
