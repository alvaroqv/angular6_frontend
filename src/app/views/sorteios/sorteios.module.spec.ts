import { SorteiosModule } from './sorteios.module';

describe('SorteiosModule', () => {
  let sorteiosModule: SorteiosModule;

  beforeEach(() => {
    sorteiosModule = new SorteiosModule();
  });

  it('should create an instance', () => {
    expect(sorteiosModule).toBeTruthy();
  });
});
