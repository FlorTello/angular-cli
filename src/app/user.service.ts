import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
  data = [
    {
      id: '1',
      text: []
    },
    {
      id: '2',
      text: []
    },
    {
      id: '3',
      text: []
    }
  ];

  constructor() {
  }

  getSencentes(game = ''): Observable<any> {
    return Observable.of(this.data);
  }

  setSentence(id: string, text: string): Observable<any> {
    this.data.find(game => game.id === id).text.push(text);
    return Observable.of({message: 'success'});
  }

}
