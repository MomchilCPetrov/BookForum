import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBook } from './shared/interfaces/book';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  loadBook(id: string) {
    return this.http.get<IBook>(apiURL + '/api/data/books/' + id);
  }

  loadBooks() {
    return this.http.get<IBook[]>(apiURL + '/api/data/books');
  }
}
