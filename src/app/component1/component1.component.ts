import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {

  warning: string="Not downloaded yet";
  onClick(){
    alert("download started");
    this.warning="downloaded successfully";
  }
  constructor() { }

}
