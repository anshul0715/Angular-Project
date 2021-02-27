import { Injectable } from '@angular/core';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private routes: Router) { }
  checkusernameandpassword(uname: string, pwd : string)
  {
    if(uname == "anshul" && pwd =="123456"){
      localStorage.setItem('username',"anshul");
      return true;
    }
    else{
      return false;
    }
  }
  loggedIn(){
    return !!localStorage.getItem('username')
  }
  logOut(){
      localStorage.removeItem('username');
      this.routes.navigate(['/login'])
      
  }
}
