import { Component, inject, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor } from '@angular/material/button';
import { UtenteServices } from '../../services/utente-services';
import { AuthService } from '../../auth/auth-service';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatAnchor, MatButtonModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  msg = signal('');

  @ViewChild('loginForm') loginForm: NgForm;

  readonly utenteS: UtenteServices = inject(UtenteServices);
  readonly authServices = inject(AuthService);
  readonly routing: Router = inject(Router);

  onSubmit() {
    this.utenteS
      .login({
        // metto alla fine i name che ho nell'html
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      })
      .subscribe({
        next: (r: any) => {
          this.msg.set('');
          this.authServices.setAutenticated();
          if (r.role === 'ADMIN') this.authServices.setAdmin();
          else this.authServices.setUser();
          this.routing.navigate(['home']);
        },
        error: (r: any) => {
          this.msg.set(r.error.msg);
        },
      });
  }
}
