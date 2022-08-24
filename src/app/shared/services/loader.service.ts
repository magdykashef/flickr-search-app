import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject: Subject<boolean>;

  constructor() {
    this.loaderSubject = new Subject<boolean>();
  }

  showLoader() {
    this.loaderSubject.next(true);
  }

  hideLoader() {
    this.loaderSubject.next(false);
  }

  isLoading() {
    return this.loaderSubject.asObservable();
  }
}
