import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from './auth/auth-service';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('corso_angular');
  readonly auth:AuthService = inject(AuthService);
  readonly routing:Router = inject(Router);

  persone = [{}];

  persone1 = [
    { nome: 'Mario', cognome: 'Rossi', isOnline: true, colore: 'red' },
    { nome: 'Luigi', cognome: 'Verdi', isOnline: false, colore: 'green' },
    { nome: 'Giovanni', cognome: 'Bianchi', isOnline: true, colore: 'blue' },
    { nome: 'Francesca', cognome: 'Neri', isOnline: false, colore: 'black' },
    { nome: 'Anna', cognome: 'Gialli', isOnline: true, colore: 'orange' },
    { nome: 'Bianca', cognome: 'Viola', isOnline: false, colore: 'purple' },
  ];

  persone2 = [
    { nome: 'Carlo', cognome: 'Rossi', isOnline: false, colore: 'brown' },
    { nome: 'Sara', cognome: 'Gialli', isOnline: false, colore: 'orange' },
    { nome: 'Aldo', cognome: 'Viola', isOnline: true, colore: 'black' },
  ];

  ngOnInit(): void {
    this.persone = this.persone1;
  }

  onClick() {
    this.persone = this.persone2;
  }

  onRestore() {
    this.persone = this.persone1;
  }

  retriveMessaggio(value: string) {
    console.log('Messaggio ricevuto: ' + value);
  }

  logout() {
    this.auth.resetAll();
    this.routing.navigate(['home']);
  }
}
