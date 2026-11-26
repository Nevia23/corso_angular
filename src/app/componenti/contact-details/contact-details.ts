import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PersoneServices } from '../../services/persone-services';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [
    MatCardModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  selector: 'app-contact-details',
  styleUrl: './contact-details.css',
  templateUrl: './contact-details.html',
})
export class ContactDetails implements OnInit {
  private id: number;
  persona = signal<any | null>(null);
  updateForm: FormGroup = new FormGroup({
    nome: new FormControl(null, Validators.required),
    cognome: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    colore: new FormControl(),
  });

  constructor(
    private service: PersoneServices,
    private route: ActivatedRoute,
    private routing: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.service.getById(this.id).subscribe({
        next: (r: any) => {
          this.persona.set(r);
          this.updateForm.patchValue({
            nome: r.nome,
            cognome: r.cognome,
            email: r.email,
            colore: r.colore,
          });
        },
        error: (r: any) => {
          console.log(r);
        },
      });
    });
  }

  onSubmit() {
    // inizializzo json con un id (dato obbligatorio)
    const updateBody: any = { id: this.id };
    // se qualcuno ha toccato i parametri, li carico in json
    if (this.updateForm.controls['nome'].dirty) updateBody.nome = this.updateForm.value.nome;
    if (this.updateForm.controls['cognome'].dirty)
      updateBody.cognome = this.updateForm.value.cognome;
    if (this.updateForm.controls['email'].dirty) updateBody.email = this.updateForm.value.email;
    if (this.updateForm.controls['colore'].dirty) updateBody.colore = this.updateForm.value.colore;

    console.log(updateBody);

    this.service.update(updateBody).subscribe({
      next: (r: any) => {
        console.log(r.msg);
        this.routing.navigate(['contact']);
      },
      error: (r: any) => {
        console.log(r);
      },
    });
  }

  onAnnul() {
    this.routing.navigate(['contact']);
  }
}
