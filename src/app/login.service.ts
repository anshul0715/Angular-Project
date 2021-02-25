import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  checkusernameandpassword(uname: string, pwd : string)
  {
    if(uname == "anshul" && pwd =="123456"){
      localStorage.setItem('username',"admin");
      return true;
    }
    else{
      return false;
    }
  }
}
