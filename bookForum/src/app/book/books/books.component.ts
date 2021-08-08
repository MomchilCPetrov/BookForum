import { Component} from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: IBook[] | undefined;

  constructor(private contentService: ContentService) {
    this.getBooks();
  }
  
  getBooks(): void {
    this.books = undefined;
    this.contentService.loadBooks().subscribe(books => this.books = books);
  }
}
