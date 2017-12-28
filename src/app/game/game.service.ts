import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../user.service';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable()
export class GameService {
  codeGame;
  allGamesCollection: AngularFirestoreCollection<any>;
  allGames = [];

  constructor(private userService: UserService,
              private db: AngularFirestore) {
    this.allGamesCollection = db.collection('games');
    this.allGamesCollection.valueChanges().subscribe((games: any) => this.allGames = games);
    // db.collection('games').valueChanges().subscribe((games: any) => this.allGames = games);
    console.log(this.allGames);
  }

  setInfogame(name, password, turns): Observable<any> {
    this.codeGame = this.generatorCodeGame();
    this.allGamesCollection.add({
      code: this.codeGame,
      name: name,
      password: password,
      turns: turns,
      text: []
    });

    // this.allGames.push({
    //   code: this.codeGame,
    //   name: name,
    //   password: password,
    //   turns: turns
    // });

    // this.db.collection('app').add({code: this.codeGame, text: []});
    // this.userService.data.push({code: this.codeGame, text: []});
    return Observable.of(this.codeGame);
  }

  getInfoGame(codeGame: string = this.codeGame): Observable<any> {
    const gameFound = this.allGames.find(game => game.code === codeGame);
    return Observable.of(gameFound);
  }

  getCodeGame(codeGame: string = this.codeGame): Observable<any> {
    const codeGameFound = this.allGames.find(game => game.code === codeGame);
    if (!!codeGameFound) {
      this.codeGame = codeGameFound.code;
      return Observable.of(this.codeGame.code);
    }
    return Observable.throw({error: ''});
  }

  getNameGame(codeGame: string = this.codeGame) {
    const gameFound = this.allGames.find(game => game.code === codeGame);
    return (gameFound.name);
  }

  getTurnsGame(codeGame: string = this.codeGame) {
    const gameFound = this.allGames.find(game => game.code === codeGame);
    return (gameFound.turns);
  }

  getSencentes(codeGame = this.codeGame): Observable<any> {
    debugger;
    // this.allGamesCollection.doc('games').
    // const arrayText = this.allGames.find(game => game.code === codeGame).text;
    // return Observable.of(arrayText);
    return this.db.collection('app', ref => ref.where('code', '==', codeGame)).valueChanges();
  }

  setSentence(code: string, text: string): Observable<any> {
    // this.db.collection('app').add({id: this.db.createId(), text});
    this.db.collection('app').add({code: code, text});

    // docUpdate.valueChanges().subscribe((res: any) => {
    //   console.log(res);
    //   newTexts.push(res);
    // });
    // newTexts.push(text);
    // console.log(newTexts);
    // docUpdate.update({text: newTexts});
    // this.db.doc('app/' + code).update({code: code, text: [text, text]});
    // const c = this.allGames.find(game => game.code === code);
    // this.codeGame = code;
    return Observable.of({message: 'success'});
  }

  generatorCodeGame() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmonpqrstuvwxyz';
    let code = '';
    for (let i = 0; i < 6; i++) {
      const rand = Math.floor(Math.random() * chars.length);
      code += chars.substr(rand, 1);
    }
    return code;
  }

  randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
