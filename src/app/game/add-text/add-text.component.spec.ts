import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTextComponent} from './add-text.component';
import {MatCardModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {GameService} from '../game.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

const gameServiceStub = {
  codeGame: '',
  getTurnsGame: () => (''),
  getNameGame: () => (''),
  setSentence: (code: string, text: string) => Observable.of({})
};
const routerStub = {
  navigate: jasmine.createSpy('navigate')
};

describe('AddTextComponent', () => {
  let component: AddTextComponent;
  let fixture: ComponentFixture<AddTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatCardModule],
      declarations: [AddTextComponent],
      providers: [
        {provide: GameService, useValue: gameServiceStub},
        {provide: Router, useValue: routerStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
