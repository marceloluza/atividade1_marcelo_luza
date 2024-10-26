import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cliente } from '../../models/cliente';
import {
  ClassNamePorValorPipe,
  ClassNamesDeValor,
} from '../../pipes/class-name-por-valor.pipe';
import { MensagemDeMouseOverDirective } from '../../directives/mensagem-de-mouse-over.directive';

@Component({
  selector: 'app-consulta-saldo',
  standalone: true,
  imports: [
    CommonModule,
    ClassNamePorValorPipe,
    MensagemDeMouseOverDirective,
  ],
  templateUrl: './consulta-saldo.component.html',
  styleUrl: './consulta-saldo.component.css'
})
export class ConsultaSaldoComponent {

  public clientes: Cliente[] = [
    new Cliente(
      'Maria das Couves',
      99.99,
      new Date('2024-10-10 13:45:00'),
    ),
    new Cliente(
      'José das Neves',
      0.0,
      new Date('2024-10-11 14:50:00'),
    ),
    new Cliente(
      'Marcelo Luza',
      -2.0,
      new Date('2024-10-12 15:59:00'),
    ),
  ];

  public cliente?: Cliente;  // Nenhum cliente selecionado por padrão.

  public creditoPreAprovadoClasses: ClassNamesDeValor = {
    zero: 'zero',
    positivo: 'positivo destaque',
    negativo: 'negativo',
  };

}
