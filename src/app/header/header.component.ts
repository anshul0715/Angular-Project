import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  brandName:string="Mindfire Solutions";
  logIn:boolean=false;
  buttonItemT:string="Log in";
  buttonItemF:string="Sign up";
  navArray=[{'navItem':'HOME'},{'navItem':'ABOUT US'},{'navItem':'CONTACT US'}];
  onClick(){
    this.logIn=!this.logIn;
  }
  ngOnInit(): void {
  }

}
