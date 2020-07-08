import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;

  authUrl = 'http://localhost:8082/api/auth';
  employersUrl = 'http://localhost:8082/api/users/';

  constructor(private http: HttpClient, private router: Router) {
  }

  login(model: any) {
    return this.http.post(this.authUrl, model).pipe(
      map((response: any) => {
        const user = response;
        if (user != null) {
          localStorage.setItem('user', JSON.stringify(user.userToReturn));
          this.currentUser = user.userToReturn;
          this.router.navigate(['/profile'], model);
        } else {
          alert('Authentication failed.');
        }
      })
    );
  }

  // login(model: any) {
  //   return this.http.post<Observable<boolean>>(this.authUrl, {
  //     model
  //   }).subscribe(isValid => {
  //     if (isValid) {
  //       sessionStorage.setItem(
  //         'token',
  //         btoa(model)
  //       );
  //       this.router.navigate(['/profile']);
  //     } else {
  //       alert('Authentication failed.');
  //     }
  //   });
  // }

  // getUsers() {
  //   const username = 'javatechie';
  //   const password = 'jt143';
  //   const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
  //   return this.http.get('http://localhost:8080/getUsers', {headers});
  // }

  register(model: any) {
    // const headers = new HttpHeaders({
    //   'confirmEmailUrl': this.confirmEmailUrl
    // });
    // const options = { headers: headers };

    // return this.http.post(this.employersUrl, model, options);
    return this.http.post(this.employersUrl, model);
  }

  // authenticationService(username: string, password: string) {
  //   return this.http.get(this.authUrl,
  //     {headers: {authorization: this.createBasicAuthToken(username, password)}}).pipe(map((res) => {
  //     this.username = username;
  //     this.password = password;
  //     this.registerSuccessfulLogin(username, password);
  //   }));
  // }
  //
  // createBasicAuthToken(username: string, password: string) {
  //   return 'Basic ' + window.btoa(username + ':' + password);
  // }
  //
  // registerSuccessfulLogin(username, password) {
  //   sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  // }
  //
  // logout() {
  //   sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  //   this.username = null;
  //   this.password = null;
  // }
  //
  // isUserLoggedIn() {
  //   const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  //   if (user === null) {
  //     return false;
  //   }
  //   return true;
  // }
  //
  // getLoggedInUserName() {
  //   const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  //   if (user === null) { return ''; }
  //   return user;
  // }
}
