import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { LocalStorage } from '../../shared/injectionToken';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  
  get username(): string {
    const user = JSON.parse(this.localStorage.getItem('user')!);
    return user.name || '';
  }

  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage'], private userService: UserService, private router: Router) { }
  
  logout(): void {
    this.userService.logout().subscribe({
      next: () => this.router.navigate(['/home']),
      error: (error) => console.log(error),
    })
  }
}
