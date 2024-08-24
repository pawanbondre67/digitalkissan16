import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'; // Update the import path
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoaderComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
