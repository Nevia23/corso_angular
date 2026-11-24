import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighLight } from '../directives/high-light';

@Component({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    HighLight,
  ],
  selector: 'app-prova',
  styleUrl: './prova.css',
  templateUrl: './prova.html',
})
export class Prova implements OnInit, OnChanges {
  @Input() persone: any;
  @Output() mandaDatiEvent = new EventEmitter<any>();
  // il punto escalamativo fa saltare il controllo se la variabile è null o undefined, quindi non è necessario inizializzarla
  @ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log('Prova component constructor called');
  }

  title = 'Corso Angular - Prova';
  daVedere = true;
  isAdmin = false;
  colore = 'green';
  defaultColor = 'yellow';
  oggi = new Date();

  ngOnInit(): void {
    console.log('Prova component initialized');
  }

  // voglio passare dati all'html, quindi creo una variabile che conterrà i dati da passare
  cani = [
    {
      nome: 'Roger',
      razza: 'Labrador',
      descrizione: 'Cane da compagnia',
    },
  ];

  isDisabled = false;

  hoCliccato(e: any) {
    console.log('Hai cliccato il pulsante! ' + e);
  }

  onInput(event: Event) {
    //console.log('Input event triggered:', event);
    console.log((<HTMLInputElement>event.target).value);
    //console.log(event);
  }

  numero = 20.34566;
  coloreOn = 'green';
  coloreOff = 'red';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  invioDati() {
    this.mandaDatiEvent.emit('Questo messaggio proviene dal componente Prova');
  }

  seeValue() {
    console.log('valoreInput: ' + this.valoreInput.nativeElement.value);
  }
}
