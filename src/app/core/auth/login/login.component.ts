import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthResponse } from '../../model/AuthResponse';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authservice: AuthService, private router:Router) { }

  isloginMode:boolean = true;
  isLoading:boolean = false;
  authObs: Observable<AuthResponse> = new Observable<AuthResponse>();

  onSwitchMode(){
    this.isloginMode = !this.isloginMode;
  }

  onGoogleSignIn(){
    this.authservice.signInWIthGoogle().subscribe({
      next: (res) => {console.log('Login successful', res),
        this.router.navigate(['/home']);
      },
      error: (err) => console.log('Login error', err)
    });
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;


  form.reset();
    if(this.isloginMode){
      this.isLoading = true;
     this.authObs = this.authservice.signIn(email,password);


      }
    else{
      this.isLoading = true;
     this.authObs=this.authservice.signUp(email,password);
    }

    this.authObs.subscribe({
      next: (res) => {
        console.log('Login successful', res);
        this.router.navigate(['/home']);
        this.isLoading = false;
      },
      error: (err) => {
        console.log('Login error', err);
        this.isLoading = false;
      }
    });

   }





}

