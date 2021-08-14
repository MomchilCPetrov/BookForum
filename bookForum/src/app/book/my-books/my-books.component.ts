import { Component } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent {
  books: IBook[] | undefined;

  constructor(private contentService: ContentService) {
    this.getBooks();
  }
  
  getBooks(): void {
    this.books = undefined;
    this.contentService.loadMyBooks().subscribe(books => this.books = books);
  }
}
