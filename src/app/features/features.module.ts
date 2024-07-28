import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';



@NgModule({
  declarations: [
    HomeComponent,
    MarketplaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
