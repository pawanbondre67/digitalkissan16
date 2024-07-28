import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../utility/loader/loader.component';




@NgModule({
  declarations: [
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    LoaderComponent
  ]
})
export class CoreModule { }
