import { Component, OnInit } from '@angular/core';
import { ProvaServices } from '../../services/prova-services';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink, RouterOutlet],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact implements OnInit {
  persone: any;

  constructor(private serviceProva: ProvaServices) {}

  // ngOnInit è un metodo del ciclo di vita del componente che viene chiamato dopo che il componente è stato inizializzato
  ngOnInit(): void {
    this.persone = this.serviceProva.getPersone();
  }
}
