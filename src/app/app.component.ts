import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  counter: number;
  form: FormGroup;


  constructor(fb: FormBuilder) {
    this.counter = 4;
    this.form = fb.group({
      name: ['', [Validators.maxLength(3)]]
    });
  }

  ngOnInit() {

  }

  increment(): any {
    this.counter++;
  }

  onSummit(event) {
    console.log(event);
  }
}
