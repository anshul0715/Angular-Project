import { Component } from '@angular/core';
import { GetCallService } from './get-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title:string = 'mindfire';
  constructor(private api: GetCallService){ }
  ngOnInit(): void{
    this.api.getCall().subscribe((data)=>{
        console.log(JSON.stringify(data,null,4));
      })
  }
}
