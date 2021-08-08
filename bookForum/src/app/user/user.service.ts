import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { LocalStorage } from '../shared/injectionToken';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }
  
  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage']) { 
    const localStorageUser = this.localStorage.getItem('user') || 'ERROR';
    try {
      this.user = JSON.parse(localStorageUser);
    } catch {
      this.user = undefined;
    }
  }

  login(email: string, password: string): void {
    this.user = {
      email,
      firstName: "Momchil",
      lastName: "Petrov"
    }
    this.localStorage.setItem('user', JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    this.localStorage.removeItem('user');
  }
}

