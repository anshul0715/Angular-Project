import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private http:HttpClient){}
  ngOnInit(): void { 
  }
  signup:any={};
  cities: any[] = [];
  stateList: Array<any> = [
    { name: 'Uttar Pradesh', cities: ['Noida', 'Kanpur', 'Varanasi'] },
    { name: 'Rajasthan', cities: ['Jaipur','Kota','Udaipur'] },
    { name: 'Tamil Nadu', cities: ['Chennai','Madurai','Vellore'] },
    { name: 'Maharashtra', cities: ['Mumbai','Pune','Nagpur'] },
  ];

 
  changeCountry(count:any) {
    this.cities = this.stateList.find(con => con.name == count).cities;
  }
  onSubmit(){
    alert(JSON.stringify(this.signup,null,4));
  }
}
