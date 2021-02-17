import { Component } from '@angular/core';
import { GetCallService } from './get-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mindfire';
  constructor(private api: GetCallService){ }
  
  ngOnInit(){
    this.api.getCall().subscribe((data)=>{
        alert(JSON.stringify(data,null,4));
      })
  }
}
