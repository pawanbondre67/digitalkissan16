import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { CoreModule } from "../core/core.module";
import { CommunityComponent } from './community/community.component';
import { SettingsComponent } from './settings/settings.component';
import { WeatherComponent } from './home/weather/weather.component';
import { WeatherService } from './services/weather/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../utility/shared.module";



@NgModule({
  declarations: [
    HomeComponent,
    MarketplaceComponent,
    CommunityComponent,
    SettingsComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    SharedModule
],
  exports: [
    HomeComponent,
    MarketplaceComponent,
    CommunityComponent,
    SettingsComponent
  ],
  providers: [
    WeatherService
  ]
})
export class FeaturesModule { }
