import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }
  contactUs:any={};
  result:any={}
 
  titleArray:{titleItem:string}[]=[{'titleItem':'fname'},{'titleItem':'lname'},{'titleItem':'CONTACT US'}];
  ngOnInit(): void {
  }

  postData(){
    let url="http://httpbin.org/post"
    this.http.post(url,{
      contactUs:this.contactUs
    }).toPromise().then((data:any) => {
      console.log(JSON.stringify(this.contactUs))
      this.result=this.contactUs;
    })
  }
}
