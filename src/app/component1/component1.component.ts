import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: '<hr><h1>{{heading}}</h1><hr>',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {

  constructor() { }

  heading="this is component1";

}
