import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/model/login-response';
import { ApiErrorResponse } from 'src/app/model/api-error-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true; // Manejo de visibilidad de la contraseña
  apiErrorMessage: string = '';
  validationErrors: string[] = [];
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Método para obtener mensajes de error
  getErrorMessage(field: string): string {
    if (this.loginForm.get(field)?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (this.loginForm.get(field)?.hasError('email')) {
      return 'Correo electrónico inválido';
    }
    if (this.loginForm.get(field)?.hasError('minlength')) {
      return 'La contraseña debe tener al menos 6 caracteres';
    }
    return '';
  }

  // Alternar visibilidad de la contraseña
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  // Método para enviar el formulario
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response: LoginResponse) => {
          if (response.success) {
            this.authService.setToken(response.data.token); 
            this.router.navigate(['/users']); 
          } else {
            alert('Error en el login');
          }
        },
        error: (errorResponse: ApiErrorResponse) => {
          this.apiErrorMessage = errorResponse.message;
          this.validationErrors = errorResponse.errors.map(err => `${err.path}: ${err.msg}`);
        }
      });
    }
  }
}
