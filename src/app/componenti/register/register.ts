import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UtenteServices } from '../../services/utente-services';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    email: new FormControl(null),
  });

  private service = inject(UtenteServices);
  private router = inject(Router);

  onSubmit() {
    this.service
      .create({
        username: this.registerForm.value.username,
        pwd: this.registerForm.value.password,
        email: this.registerForm.value.email,
        role: 'USER', // per adesso creo solo utenti USER
      })
      .subscribe({
        next: (r: any) => {
          console.log(r.msg);
          alert(r.msg); // feedback che conferma la registrazione
          this.router.navigate(['/login']);
        },
        error: (r: any) => {
          alert(r.error?.msg);
        },
      });
  }
}
