import { Component, OnInit } from '@angular/core';
import { GetCallService } from '../../services/get-call.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {

  warning: string="Not downloaded yet";
  onClick():void{
    alert("download started");
    this.warning="downloaded successfully";
  }
  result:any;
  constructor(private api: GetCallService){ }
  ngOnInit(): void{
    this.api.getCall().subscribe((data)=>{
        console.log(JSON.stringify(data,null,4));
        this.result=data
      })
  }

}
