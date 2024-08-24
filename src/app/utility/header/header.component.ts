import { Component, OnInit } from '@angular/core';
import { UserData } from '../../core/model/UserData';
import { UserService } from '../../core/auth/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService) { }

  currentUser: UserData | null = null;

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
}


}
