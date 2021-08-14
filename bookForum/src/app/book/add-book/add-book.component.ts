import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent{
  form: FormGroup;
  errorMessage: string = "";

  constructor(private fb: FormBuilder, private contentService: ContentService, private router: Router) {
    this.form = this.fb.group({
      title: ["", [Validators.required]],
      img: ["", [Validators.required]],
      author: ["", [Validators.required]],
      'publishing-date': ["", [Validators.required]],
      genre: ["", [Validators.required]],
      description: ["", [Validators.required]],
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.contentService.addBook(this.form.value).subscribe({
      next: () => this.router.navigate(['/books']),
      error: (error) => {
        this.errorMessage = error.error.message;
      }
    })
  }

}
