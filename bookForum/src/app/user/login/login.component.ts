import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  login(name: string, password: string): void {
    this.userService.login(name,password);
    const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
    this.router.navigate([redirectUrl]);
  }
}
