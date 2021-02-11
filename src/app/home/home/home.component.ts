import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(){}
  ngOnInit(): void { 
  }
  fname:string="Anshul";
  lname:string="Agarwal";
  mail:string="abc@def.com";
  pnumber:number=99999999;

  selArray=[{'selItem':'Web Development'},
            {'selItem':'Android Development'},
            {'selItem':'Artificial Intelligence'}, 
            {'selItem':'Tech Buzz'}
           ];

  
}
