import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  message: string="This message is from about component";
  ngOnInit(): void {
  }
  childMessage:string="";
  recieveMessage($event:string){
    this.childMessage=$event;
  }
}
