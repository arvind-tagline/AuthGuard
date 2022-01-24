import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // public isLoggedIn() {
  //   if (!localStorage.getItem('token')) {
  //     return true;
  //   } else return false;
  // }

  public isLoggedIn() {
    return false;
  }

  public isCustomer() {
    return true;
  }

  public iscanDeactivate() {
    return true;
  }
}
