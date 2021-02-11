import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  brandName:string="Mindfire Solutions";
  navButton:string="Log in"
  navArray=[{'navItem':'HOME'},{'navItem':'ABOUT US'},{'navItem':'CONTACT US'}];
  onClick(){
    
  }
  ngOnInit(): void {
  }

}
