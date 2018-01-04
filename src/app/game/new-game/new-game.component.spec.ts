import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewGameComponent} from './new-game.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {GameService} from '../game.service';
import {MatCardModule, MatDialogModule} from '@angular/material';
import {Router} from '@angular/router';

const gameServiceStub = {
  setInfogame: (name, password, turns) => Observable.of('')
};
const routerStub = {
  navigate: jasmine.createSpy('navigate')
};
describe('NewGameComponent', () => {
  let component: NewGameComponent;
  let fixture: ComponentFixture<NewGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatCardModule, MatDialogModule],
      declarations: [NewGameComponent],
      providers: [
        {provide: GameService, useValue: gameServiceStub},
        {provide: Router, useValue: routerStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
