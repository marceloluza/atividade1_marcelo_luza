import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carta } from '../../models/carta.model';

@Component({
  selector: 'app-seletor-carta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seletor-carta.component.html',
  styleUrls: ['./seletor-carta.component.css'],
})
export class SeletorCartaComponent {
  naipes = ['♦', '♠', '♥', '♣'];
  numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'J', 'K'];

  selecionadaNaipe: string | null = null;
  selecionadaNumero: string | null = null;

  @Output() cartaSelecionada = new EventEmitter<Carta>();

  naipeSelecionada(naipe: string) {
    this.selecionadaNaipe = naipe;
    this.emiteCarte();
  }

  numeroSelecionado(numero: string) {
    this.selecionadaNumero = numero;
    this.emiteCarte();
  }

  private emiteCarte() {
    if (this.selecionadaNaipe && this.selecionadaNumero) {
      this.cartaSelecionada.emit({
        naipe: this.selecionadaNaipe,
        numero: this.selecionadaNumero,
      });
    }
  }
}
