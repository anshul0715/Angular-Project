import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCallService {

  constructor(private http:HttpClient) {

   }

   getCall(){
     return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
   }
}
