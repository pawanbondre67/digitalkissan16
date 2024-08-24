import { UserService } from './../../core/auth/services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/services/auth.service';
import { UserData } from '../../core/model/UserData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private authService : AuthService , private userService:UserService) { }

  currentUser: UserData | null = null;




  onLogout(){
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
    

  }





}
