
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable ,map,switchMap, catchError, throwError, of} from 'rxjs';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthResponse } from '../../model/AuthResponse';
import { UserService } from './user.service';
import { UserData } from '../../model/UserData';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user$: Observable<User | null>;

  constructor(private afAuth: AngularFireAuth,private userService: UserService) {
    // this.user$ = afAuth.authState;
  }



  signIn(email: string, password: string): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(
      switchMap((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (user) {
          const currentData: UserData = {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL
          };
          this.userService.setCurrentUser(currentData); // Update user data in the service
        }

        if (user) {
          return from(Promise.all([user.getIdToken(), user.getIdTokenResult()])).pipe(
            map(([idToken, idTokenResult]) : AuthResponse=> ({
              idToken: idToken,
              email: user.email,
              refreshToken: user.refreshToken,
              expiresIn: idTokenResult.expirationTime,
              localId: user.uid,
            }))
          );
        }
        return from([null]);
      })
    ).pipe(catchError(this.handleError));

  }

  private handleError(error: any) {
    let errorMessage = 'An unknown error occurred!';
    if (!error.error || !error.error.error) {
     throwError(() => new Error(errorMessage));
    }
    switch (error.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct!';
        break;
    }
   return  throwError(() => errorMessage);
  }



  signUp(email: string, password: string): Observable<any> {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password)).pipe(
      switchMap((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (user) {
          const currentData: UserData = {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL
          };
          this.userService.setCurrentUser(currentData); // Update user data in the service
        }


        if (user) {
          return from(Promise.all([user.getIdToken(), user.getIdTokenResult()])).pipe(
            map(([idToken, idTokenResult]) : AuthResponse=> ({
              idToken: idToken,
              email: user.email,
              refreshToken: user.refreshToken,
              expiresIn: idTokenResult.expirationTime,
              localId: user.uid,
            }))

          );
        }
        return from([null]);
      })
    ).pipe(catchError(this.handleError));
  }



  signInWIthGoogle(): Observable<any> {
    return from(this.afAuth.signInWithPopup(new GoogleAuthProvider())).pipe(
      switchMap((userCredential) => {
        const user = userCredential.user;
        if (user) {
          const currentData: UserData = {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL
          };
          this.userService.setCurrentUser(currentData); // Update user data in the service
        }


        if (user) {
          return from(Promise.all([user.getIdToken(), user.getIdTokenResult()])).pipe(
            map(([idToken, idTokenResult]) :AuthResponse => ({
              idToken: idToken,
              email: user.email,
              refreshToken: user.refreshToken,
              expiresIn: idTokenResult.expirationTime,
              localId: user.uid
            }))
          );
        }
        return from([null]);
      })
    ).pipe(catchError(this.handleError));
  }


  signOut(): Observable<void> {
    return from(this.afAuth.signOut());
  }




}
