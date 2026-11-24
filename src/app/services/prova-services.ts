import { Service } from '@angular/core';

@Service()
export class ProvaServices {
  private persone = [
    { nome: 'Mario', cognome: 'Rossi', isOnline: true, colore: 'red' },
    { nome: 'Luigi', cognome: 'Verdi', isOnline: false, colore: 'green' },
    { nome: 'Giovanni', cognome: 'Bianchi', isOnline: true, colore: 'blue' },
    { nome: 'Francesca', cognome: 'Neri', isOnline: false, colore: 'black' },
    { nome: 'Anna', cognome: 'Gialli', isOnline: true, colore: 'orange' },
    { nome: 'Bianca', cognome: 'Viola', isOnline: false, colore: 'purple' },
  ];

  getPersone() {
    return this.persone;
  }
}
