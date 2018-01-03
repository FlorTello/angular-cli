import {inject, TestBed} from '@angular/core/testing';

import {GameService} from './game.service';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';

const angularFirestoreStub = {
  collection: (path: string) => ({
    valueChanges: Observable.of([]), add: (object) => {
    }
  })
};
describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        {provide: GameService, useClass: GameService},
        {provide: AngularFirestore, useValue: angularFirestoreStub}
      ]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));


});
