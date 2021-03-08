import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login-page/login-service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private service : LoginService , private routes: Router) { }
  msg:string="";
  ngOnInit() {
  }
  check(uname: string, pwd : string)
  {
    var output = this.service.checkusernameandpassword(uname, pwd);
    if(output == true)
    {
      this.routes.navigate(['/brand']);
    }
    else{
      this.msg ='Invalid username or password';
    }
  }
 

}
