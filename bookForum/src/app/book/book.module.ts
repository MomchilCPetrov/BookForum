import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [
    BooksComponent,
    BookDetailsComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  exports: [
    BooksComponent,
    BookDetailsComponent,
    AddBookComponent
  ]
})
export class BookModule { }
