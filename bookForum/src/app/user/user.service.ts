import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { appConfig } from '../shared/config';
import { LocalStorage } from '../shared/injectionToken';
import { IUser } from '../shared/interfaces/user';
import { HttpHeaders } from '@angular/common/http';

const apiURL = appConfig.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get isLogged(): boolean {
    return !!this.localStorage.getItem('user');
  }
  
  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage'], private http: HttpClient) { 
    
  }

  login(email: string, password: string) {
    const data = {
      login: email,
      password: password
    }
    return this.http.post<IUser>(apiURL + '/api/users/login', data).pipe(
      tap((user) => this.localStorage.setItem('user', JSON.stringify(user)))
    )
  }

  register(name: string, email: string, password: string) {
    const data = {
      name,
      email,
      password
    }
    return this.http.post<IUser>(apiURL + '/api/users/register', data).pipe(
      tap((user) => this.localStorage.setItem('user', JSON.stringify(user)))
    )
  }

  logout() {
    return this.http.get(apiURL + '/api/users/logout').pipe(
      tap(() => this.localStorage.removeItem('user'))
    )
  }
}

