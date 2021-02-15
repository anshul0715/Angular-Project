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

  stateList: Array<any> = [
    { name: 'Uttar Pradesh', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona'] },
    { name: 'USA', cities: ['Downers Grove'] },
    { name: 'Mexico', cities: ['Puebla'] },
    { name: 'China', cities: ['Beijing'] },
  ];

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
          cities: Array<any>;
          changeCountry(count) {
            this.cities = this.countryList.find(con => con.name == count).cities;
          }
  onSubmit(){
    alert(JSON.stringify(this.signup,null,4));
  }
}
