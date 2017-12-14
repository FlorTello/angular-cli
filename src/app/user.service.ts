import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
  data = [];

  constructor() {
  }

  getSencentes(): Observable<any> {
    return Observable.of(this.data);
  }

  setSentence(text: string): Observable<any> {
    this.data.push({
      gamer: 'user', sentence: text
    });
    return Observable.of({message: 'success'});
  }

}
