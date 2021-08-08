import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book: IBook | undefined;

  constructor(private contentService: ContentService, private activatedRoute: ActivatedRoute) {
    this.getBook();
  }

  getBook(): void {
    const id = this.activatedRoute.snapshot.params.bookId || '';
    this.contentService.loadBook(id).subscribe(book => this.book = book);
  }
}

