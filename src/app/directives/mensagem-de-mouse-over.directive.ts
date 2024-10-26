import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMensagemDeMouseOver]',
  standalone: true
})
export class MensagemDeMouseOverDirective {

  @Input()
  public appMensagemDeMouseOver?: string;

  private exibicoes: number = 0;

  constructor(
  ) {
  }

  @HostListener('mouseenter')
  public exibeMensagem(): void {
    this.exibicoes++;
    if (this.exibicoes > 1) {
      return;
    }
    alert(this.appMensagemDeMouseOver || 'ALO MUNDO');
  }

}
