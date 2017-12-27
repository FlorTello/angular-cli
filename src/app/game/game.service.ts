import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GameService {

  allGames = [];

  constructor() {
  }

  setInfogame(id, name, password, players, turns): Observable<any> {
    this.allGames.push({
      id: id,
      name: name,
      password: password,
      players: players,
      turns: turns
    });
    return Observable.of({});
  }

  getInfoGame(idGame: string = ''): Observable<any> {
    const gameFound = this.allGames.find(game => game.id === idGame);
    return Observable.of(gameFound);
  }

  getTurnsgame(idGame: string): Observable<any> {
    const gameFound = this.allGames.find(game => game.id === idGame);
    return Observable.of(gameFound.turns * gameFound.players);
  }

}
