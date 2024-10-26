import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConsultaSaldoComponent } from './components/consulta-saldo/consulta-saldo.component';
import { SeletorCartaComponent } from './components/seletor-carta/seletor-carta.component';
import { Carta } from './models/carta.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ConsultaSaldoComponent,
    SeletorCartaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cartaSelecionada: Carta | null = null;

  onCartaSelecionada(carta: Carta) {
    this.cartaSelecionada = carta;
  }
}
