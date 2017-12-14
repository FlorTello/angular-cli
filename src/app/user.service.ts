import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
  API = 'API';
  data = [];

  constructor(private http: HttpClient) {
  }

  getSencentes(): Observable<any> {
    return Observable.of(this.data);
    // return this.http.post(`${this.API}/user`, {
    //   sentences: sentence
    // });
  }

  setSentence(text: string): Observable<any> {
    this.data.push({
      gamer: 'user', sentence: text
    });
    console.log(this.data);
    return Observable.of({message: 'success'});
  }

}
