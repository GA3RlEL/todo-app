import { Component, inject } from '@angular/core';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [CarouselComponent, FormsModule],
})
export class LoginComponent {
  signUp = true;
  authService = inject(AuthService);
  router = inject(Router);
  errorService = inject(ErrorService);

  registerEmail = '';
  registerPassword = '';
  registerUsername = '';

  loginEmail = '';
  loginPassword = '';

  changeState() {
    this.signUp = !this.signUp;
  }

  onLogin() {
    this.authService.login(this.loginEmail, this.loginPassword).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
        this.errorService.resetError();
      },
      error: (err) => {
        this.errorService.isError = true;
        this.errorService.errorMessage = { message: err.code };
      },
    });
  }

  onRegister() {
    this.authService
      .register(
        this.registerEmail,
        this.registerUsername,
        this.registerPassword
      )
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/');
          this.errorService.resetError();
        },
        error: (err) => {
          this.errorService.isError = true;
          this.errorService.errorMessage = { message: err.code };
        },
      });
  }
}
