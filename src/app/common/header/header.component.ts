import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public service : LoginService) { }

  brandName:string="Mindfire Solutions";
  logIn:boolean=false;
  buttonItemT:string="Sign up";
  buttonItemF:string="Log out";
  navArray:{navItem:string}[]=[{'navItem':'HOME'},{'navItem':'ABOUT US'},{'navItem':'CONTACT US'}];
  onClick(){
    this.logIn=!this.logIn;
  }
  ngOnInit(): void {
    this.logIn=!this.logIn;
  }

}
