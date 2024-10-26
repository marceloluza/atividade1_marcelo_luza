export class Cliente {

  constructor(
    public nome: string,
    public saldo: number,
    public ultimoLogin: Date,
  ) {
  }

  public get creditoPreAprovado(): number | undefined {
    if (this.saldo < -0.005) {
      return undefined;
    }
    if (this.saldo < 50) {
      return 0;
    }
    return 100;
  }

}
