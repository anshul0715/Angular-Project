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
  signup:any={};

  selArray=[{'selItem':'Uttar Pradesh'},
            {'selItem':'Rajasthan'},
            {'selItem':'Tamil Nadu'}, 
            {'selItem':'Maharashtra'}
           ];
  cityArray=[{'cityItem':'Noida'},
           {'cityItem':'Kanpur'},
           {'cityItem':'Varanasi'}, 
           {'cityItem':'Mathura'}
          ];

  onSubmit(){
    alert(JSON.stringify(this.signup,null,4));
  }
}
