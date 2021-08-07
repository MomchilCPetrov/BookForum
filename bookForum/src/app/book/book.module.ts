import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookRoutingModule } from './book-routing.module';
import { MyBooksComponent } from './my-books/my-books.component';



@NgModule({
  declarations: [
    BooksComponent,
    BookDetailsComponent,
    AddBookComponent,
    MyBooksComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  exports: [
    BooksComponent,
    BookDetailsComponent,
    AddBookComponent,
    MyBooksComponent
  ]
})
export class BookModule { }
