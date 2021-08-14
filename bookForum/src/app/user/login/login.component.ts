import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  form: FormGroup;
  errorMessage: string = "";

  constructor(
    private userService: UserService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  login(){
    if (this.form.invalid) {
      return;
    }
    this.userService.login(this.form.value.email, this.form.value.password).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (error) => {
        this.errorMessage = error.error.message;
      }
    })
  }
}
