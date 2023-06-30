import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularnest';
  formlog: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    this.formlog = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.formlog.valid) {
      const loginData = {
        email: this.formlog.value.email,
        password: this.formlog.value.password
      };
  
      this.auth.login(loginData).subscribe(
        response => {
          console.log(response);
        },
        error => {
          if (error.status === 401) {
            console.log('Contraseña incorrecta');
          } else {
            console.error(error);
          }
        }
      );
    }
  }
}
