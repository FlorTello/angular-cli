import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JoinGameComponent} from './join-game.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {GameService} from '../game.service';
import {MatCardModule} from '@angular/material';
import {AngularFirestore} from 'angularfire2/firestore';
import {Router} from '@angular/router';

const angularFirestoreStub = {};
const gameServiceStub = {};
const routerStub = {
  navigate: jasmine.createSpy('navigate')
};

describe('JoinGameComponent', () => {
  let component: JoinGameComponent;
  let fixture: ComponentFixture<JoinGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatCardModule],
      declarations: [JoinGameComponent],
      providers: [
        {provide: GameService, useValue: gameServiceStub},
        {provide: Router, useValue: routerStub},
        {provide: AngularFirestore, useValue: angularFirestoreStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
