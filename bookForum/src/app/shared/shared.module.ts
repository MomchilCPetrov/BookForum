import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorage } from './injectionToken';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: LocalStorage,
      useValue: window.localStorage
    }
  ]
})
export class SharedModule { }
