import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../utility/shared.module';
import { AuthService } from './auth/services/auth.service';
import { CoreRoutingModule } from './core-routing.module';





@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CoreRoutingModule
  ],
  exports: [
    LoginComponent
  ],

  providers: [
     AuthService
  ]
})
export class CoreModule { }
