import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  show: boolean=false;
  constructor(public loaderService: LoaderService) { }

  ngOnInit():any {
    this.loaderService.loadState.subscribe(res => {
      this.show = res;
    });
  }
}
