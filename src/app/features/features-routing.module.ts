import { MarketplaceComponent } from './marketplace/marketplace.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [

  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'marketplace', component: MarketplaceComponent
  },
  {
    path: 'community' , component: CommunityComponent
  },
  {
    path: 'settings', component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

