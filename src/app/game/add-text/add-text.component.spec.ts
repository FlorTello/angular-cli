import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTextComponent} from './add-text.component';
import {MatCardModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';
import {GameService} from '../game.service';

describe('AddTextComponent', () => {
  let component: AddTextComponent;
  let fixture: ComponentFixture<AddTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, MatCardModule],
      declarations: [AddTextComponent],
      providers: [
        {provide: GameService, useClass: GameService}
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
