import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddBookComponent } from "./add-book/add-book.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BooksComponent } from "./books/books.component";

const routes: Routes = [
    {
        path: 'books',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: BooksComponent
            },
            {
                path: ':bookId',
                component: BookDetailsComponent
            }
        ]
    },
    {
        path: 'add-book',
        component: AddBookComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BookRoutingModule {}
