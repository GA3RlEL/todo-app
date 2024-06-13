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
  signUp = false;
  authService = inject(AuthService);
  router = inject(Router);
  errorService = inject(ErrorService);

  isLoading = false;

  registerEmail = '';
  registerPassword = '';
  registerUsername = '';

  loginEmail = '';
  loginPassword = '';

  changeState() {
    this.signUp = !this.signUp;
  }

  onLogin() {
    this.isLoading = true;
    this.authService.login(this.loginEmail, this.loginPassword).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
        this.errorService.resetError();
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorService.isError = true;
        this.errorService.errorMessage = { message: err.code };
      },
    });
  }

  onRegister() {
    this.isLoading = true;
    this.authService
      .register(
        this.registerEmail,
        this.registerUsername,
        this.registerPassword
      )
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigateByUrl('/');
          this.errorService.resetError();
        },
        error: (err) => {
          this.isLoading = false;
          this.errorService.isError = true;
          this.errorService.errorMessage = { message: err.code };
        },
      });
  }
}
