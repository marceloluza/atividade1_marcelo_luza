import { Cliente } from './cliente';

describe('Cliente', () => {

  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente(
      'José Pereira',
      100.00,
      new Date('2024-10-12T11:12:10.000Z'),
    );
  });

  it('should create an instance', () => {
    expect(cliente).toBeTruthy();
  });

  it('deveria conter "José Pereira" como nome', () => {
    expect(cliente.nome).toBe('José Pereira');
  });

  describe('creditoPreAprovado', () => {

    it('deve retornar 0 para clientes com baixo saldo', () => {
      cliente.saldo = 49.99;
      expect(cliente.creditoPreAprovado).toBe(0);
    });

    it('deve retornar 0 para clientes com baixo saldo (limiar)', () => {
      cliente.saldo = 49.999;
      expect(cliente.creditoPreAprovado).toBe(0);
    });

    it('deve retornar 0 para clientes com alto saldo', () => {
      cliente.saldo = 50.00;
      expect(cliente.creditoPreAprovado).toBe(100);
    });

  });

});
