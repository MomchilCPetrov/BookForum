import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sameValueAsFactory } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;
  errorMessage: string = "";

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      repeatPassword: ["", [Validators.required, sameValueAsFactory(() => this.form?.get('password')!)]]
    })
  }

  register(){
    if (this.form.invalid) {
      return;
    }
    this.userService.register(this.form.value.name, this.form.value.email, this.form.value.password).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (error) => {
        this.errorMessage = error.error.message;
      }

    })
  }

}
