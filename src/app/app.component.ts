import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {GameService} from './game/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gridText = [];
  form: FormGroup;

  constructor(private gameService: GameService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      sentence: ['', Validators.required]
    });
  }

  onAdd() {
    if (this.form.valid) {
      const text = this.form.get('sentence');
      this.gameService.setSentence('', text.value).subscribe(res => {
        this.gridText = null;
        text.reset('');
      });
    }
  }

  onShowData() {
    this.gameService.getSencentes().subscribe(res => {
      this.gridText = res;
    });
  }

}
