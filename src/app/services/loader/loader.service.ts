import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class LoaderService {
  

  loadState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  ShowLoader() {
    this.loadState.next(true);
  }

  HideLoader() {
      this.loadState.next(false);
  }

  isVisible(): Observable<boolean> {
    return this.loadState.asObservable().pipe(share());
  }


}
