import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent{
  childMeassage: string="Hello from the child component";
  @Input() message: string="";
  @Output() messageEvent=new EventEmitter<string>();

  constructor() { }
  
  sendMessage() {
    this.messageEvent.emit(this.childMeassage);
  }
  

}
