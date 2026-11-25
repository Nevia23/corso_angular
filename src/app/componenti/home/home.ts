import { Component } from '@angular/core';
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

@Component({
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
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

  onSubmit() {
    console.log("cognome: " + this.homeForm.value.cognome);
    console.log("nome: " + this.homeForm.value.nome);
  }

  onSubmit1(form: NgForm) { 
    console.log(form.value);
    console.log('cognome: ' + form.value.cognome);
  }
}
