import { Component, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { LoginService } from '../login.service';

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
  check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigate(['/dashboard']);
    }
    else{
      this.msg ='Invalid username or password';
    }
  }
 

}
