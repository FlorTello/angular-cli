import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResultGameComponent} from './result-game.component';
import {MatCardModule} from '@angular/material';
import {GameService} from '../game.service';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';


const gameServiceStub = {
  getSencentes: () => Observable.of([])
};
describe('ResultGameComponent', () => {
  let component: ResultGameComponent;
  let fixture: ComponentFixture<ResultGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [ResultGameComponent],
      providers: [
        {provide: GameService, useValue: gameServiceStub}
        // {provide: AngularFirestore, useValue: angularFiresotreStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
