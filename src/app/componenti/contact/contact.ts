import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PersoneServices } from '../../services/persone-services';

@Component({
  imports: [CommonModule, RouterLink, RouterOutlet],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact implements OnInit {
  persone;

  constructor(private service: PersoneServices) {
    this.persone = this.service.persone;
  }
  // ngOnInit è un metodo del ciclo di vita del componente che viene chiamato dopo che il componente è stato inizializzato
  ngOnInit(): void {
    this.service.list();
  }
}
