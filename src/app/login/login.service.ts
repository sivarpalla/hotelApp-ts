import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn:boolean= false;

  constructor() { }

  login(username: string, password: string){
    if(username === 'admin' && password === 'admin') {
      this.isLoggedIn =true;
    }
    return this.isLoggedIn;
  }
}
