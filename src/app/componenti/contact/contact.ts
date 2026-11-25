import { Component, OnInit } from '@angular/core';
import { ProvaServices } from '../../services/prova-services';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact implements OnInit {
  persone: any;
  persona: any;

  isProfile: boolean = false;

  constructor(
    private serviceProva: ProvaServices,
    private route: ActivatedRoute,
  ) {}

  // ngOnInit è un metodo del ciclo di vita del componente che viene chiamato dopo che il componente è stato inizializzato
  ngOnInit(): void {
    // snapshot serve per leggere i parametri della route al momento dell'inizializzazione del componente
    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true;
      this.persona = this.serviceProva.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!));
    } else {
      this.isProfile = false;
      this.persone = this.serviceProva.getPersone();
    }
  }
}