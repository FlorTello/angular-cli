import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class UserService {
  codeGame;
  data = [];

  constructor(private db: AngularFirestore) {
    db.collection('games').valueChanges().subscribe((games: any) => this.data = games);
  }

  // getSencentes(codeGame = this.codeGame): Observable<any> {
  //   debugger;
  //   const arrayText = this.data.find(game => game.code === codeGame).text;
  //   return Observable.of(arrayText);
  // }
  //
  // setSentence(code: string, text: string): Observable<any> {
  //   debugger;
  //   this.data.find(game => game.code === code).text.push(text);
  //   this.codeGame = code;
  //   return Observable.of({message: 'success'});
  // }

}
