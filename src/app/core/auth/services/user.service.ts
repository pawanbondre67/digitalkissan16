import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '../../model/UserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<UserData | null> = new BehaviorSubject<UserData | null>(null);
  public currentUser$: Observable<UserData | null> = this.currentUserSubject.asObservable();


  constructor() { }


  setCurrentUser(userData: UserData): void {
    this.currentUserSubject.next(userData);
  }

  getCurrentUser(): Observable<UserData | null> {
    return this.currentUser$;
  }

}
