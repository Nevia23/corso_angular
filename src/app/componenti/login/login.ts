import { Component, inject, Inject, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor } from '@angular/material/button';
import { UtenteServices } from '../../services/utente-services';

@Component({
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatAnchor],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  msg = signal('');

  @ViewChild('loginForm') loginForm: NgForm;

  readonly utenteS = inject(UtenteServices);

  onSubmit() {
    this.utenteS
      .login({
        // metto i name che ho nell'html
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      })
      .subscribe({
        next: (r: any) => {
          this.msg.set('');
          console.log(r);
        },
        error: (r: any) => {
          this.msg.set(r.error.msg);
        },
      });
  }
}
