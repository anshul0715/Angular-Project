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
  fname="anshul";
  lname="";
  mail="";
  pnumber="";

  selArray=[{'selItem':'Web Development'},
            {'selItem':'Android Development'},
            {'selItem':'Artificial Intelligence'}, 
            {'selItem':'Tech Buzz'}
           ];

  
}
