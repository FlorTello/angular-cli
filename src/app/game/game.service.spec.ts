import {inject, TestBed} from '@angular/core/testing';

import {GameService} from './game.service';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import {RouterModule} from '@angular/router';

const collectionStub = {
  add: jasmine.createSpy('add'),
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(Observable.of([]))
};

const angularFiresotreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        {provide: GameService, useClass: GameService},
        {provide: AngularFirestore, useValue: angularFiresotreStub}
      ]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  it('should to returned Observable when it subscribe to setInfoGame', inject([GameService], (gameService) => {
    gameService.setInfogame('name', '++++', '2').subscribe(res => {
      expect(res).toEqual(gameService.codeGame);
    });
  }));

  it('should to returned Observable when it subscribe to getCodeGame', inject([GameService], (gameService) => {
    gameService.allGames = [
      {
        code: '1234',
        name: '',
        password: '',
        turns: ''
      }
    ];
    gameService.codeGame = '1234';
    gameService.getCodeGame().subscribe(res => null,
      error => {
        expect(error).toEqual({error: ''});
      });
  }));


});
