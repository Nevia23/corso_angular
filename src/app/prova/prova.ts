import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, CommonModule],
  selector: 'app-prova',
  styleUrl: './prova.css',
  templateUrl: './prova.html',
})
export class Prova implements OnInit, OnChanges {

  @Input() persone: any;
  @Output() mandaDatiEvent = new EventEmitter<any>();

  constructor() {
    console.log('Prova component constructor called');
  }

  title = 'Corso Angular - Prova';
  daVedere = true;
  isAdmin = false;

  ngOnInit(): void {
    console.log('Prova component initialized');
  }

  // voglio passare dati all'html, quindi creo una variabile che conterrà i dati da passare
  cani = [
    {
      nome: 'Roger',
      razza: 'Labrador',
      descrizione: 'Cane da compagnia'
    }
  ];

  isDisabled = false;

  hoCliccato(e : any) {
    console.log('Hai cliccato il pulsante! ' + e);
  }

  onInput(event : Event) {
    //console.log('Input event triggered:', event);
    console.log((<HTMLInputElement>event.target).value);
    //console.log(event);
  }

  numero = 2;
  coloreOn = 'green';
  coloreOff = 'red';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  invioDati() {    
    this.mandaDatiEvent.emit("Questo messaggio proviene dal componente Prova");
  }
}
