import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvaServices } from '../../services/prova-services';

@Component({
  imports: [CommonModule],
  selector: 'app-prova-persone-service',
  styleUrl: './prova-persone-service.css',
  templateUrl: './prova-persone-service.html',
})
export class ProvaPersoneService implements OnInit {
  persone: any;

  constructor(private service: ProvaServices) {}

  ngOnInit(): void {
    this.persone = this.service.getPersone();
  }
}
