import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IBook } from './shared/interfaces/book';
import { appConfig } from './shared/config';
import { LocalStorage } from './shared/injectionToken';

const apiURL = appConfig.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage'], private http: HttpClient) { }

  loadBook(id: string) {
    return this.http.get<IBook>(apiURL + '/api/data/books/' + id);
  }

  loadBooks() {
    return this.http.get<IBook[]>(apiURL + '/api/data/books');
  }

  loadMyBooks() {
    return this.http.get<IBook[]>(apiURL + `/api/data/books?where=ownerId='${JSON.parse(this.localStorage.getItem('user')!).ownerId}'`);
  }

  addBook(data: {title: string; img: string; author: string; 'publishing-date': string; genre: string; description: string}) {
    const sendData = {
    title: data.title,
    imageUrl: data.img,
    author: data.author,
    publishingDate: data['publishing-date'],
    genre: data.genre,
    description: data.description,
    ownerId: JSON.parse(this.localStorage.getItem('user')!).ownerId
    }
    return this.http.post<IBook[]>(apiURL + '/api/data/books', sendData);
  }
}
