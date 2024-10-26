import { ClassNamePorValorPipe } from './class-name-por-valor.pipe';

describe('ClassNamePorValorPipe', () => {

  let pipe: ClassNamePorValorPipe;

  beforeEach(() => {
    pipe = new ClassNamePorValorPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {

    it('deve retornar "zero" para 0', () => {
      expect(pipe.transform(0)).toBe('zero');
    });

    it('deve retornar "zero" para números levemente positivos', () => {
      expect(pipe.transform(0.001)).toBe('zero');
    });

    it('deve retornar "positivo" para números positivos', () => {
      expect(pipe.transform(0.005)).toBe('positivo');
    });

    it('deve retornar "positivo" para números muito positivos', () => {
      expect(pipe.transform(50)).toBe('positivo');
    });

    it('deve retornar "zero" para números levemente negativos', () => {
      expect(pipe.transform(-0.001)).toBe('zero');
    });

    it('deve retornar "negativo" para números negativos', () => {
      expect(pipe.transform(-0.005)).toBe('negativo');
    });

    it('deve retornar "negativo" para números muito negativos', () => {
      expect(pipe.transform(-50)).toBe('negativo');
    });

  });

});
