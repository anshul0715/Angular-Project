import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
 /**  template: `
      <div style="min-height:100vh" fxLayout="column
      fxLayoutAlign="stretch>
        

<app-header></app-header>
<router-outlet (activate)="onActivate()"></router-outlet>
<span fxFlex="1 1 auto"></span>
<app-footer></app-footer>
      </div>
    `,
*/
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  constructor() { }
 onActivate(){
   window.scroll(0,0);
 }
  ngOnInit(): void {
  }

}
