import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Auth } from "../core/guards/auth";
import { AddBookComponent } from "./add-book/add-book.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BooksComponent } from "./books/books.component";
import { MyBooksComponent } from "./my-books/my-books.component";

const routes: Routes = [
    {
        path: 'books',
        component: BooksComponent
    },
    {
        path: 'book-details/:bookId',
        component: BookDetailsComponent
    },
    {
        path: 'add-book',
        component: AddBookComponent,
        canActivate: [Auth],
        data: {
            authenticationRequired: true,
            autheticationFailUrl: '/login'
        }
    },
    {
        path: 'my-books',
        component: MyBooksComponent,
        canActivate: [Auth],
        data: {
            authenticationRequired: true,
            autheticationFailUrl: '/login'
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BookRoutingModule {}
