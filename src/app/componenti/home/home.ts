import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PersoneServices } from '../../services/persone-services';

@Component({
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, ReactiveFormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  // @ViewChild('homeForm') homeForm: NgForm;

  // form group ben definito con le sue regole
  homeForm: FormGroup = new FormGroup({
    nome: new FormControl(null, Validators.required),
    cognome: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    colore: new FormControl(),
  });

  private service = inject(PersoneServices);

  onSubmit() {
    this.service
      .create({
        nome: this.homeForm.value.nome,
        cognome: this.homeForm.value.cognome,
        email: this.homeForm.value.email,
        colore: this.homeForm.value.colore,
      })
      // perché è un observable, la risposta arriva quando arriva
      .subscribe({
        next: (r: any) => {
          console.log(r.msg);
          this.homeForm.reset();
        },
        error:((r:any) => {
          console.log(r);
        })
      });
  }

  onSubmit1(form: NgForm) {
    console.log(form.value);
    console.log('cognome: ' + form.value.cognome);
  }
}
