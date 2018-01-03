import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GameService} from '../game.service';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.scss']
})
export class AddTextComponent implements OnInit {
  form;
  allTurns;
  codeGame;
  nameGame = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private gameService: GameService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      sentence: ['', Validators.required]
    });
    this.allTurns = this.gameService.getTurnsGame();
    this.nameGame = this.gameService.getNameGame();
    this.codeGame = this.gameService.codeGame;
    console.log('turns', this.allTurns);
  }

  onAdd() {

    if (this.form.valid) {
      const newSentence = this.form.get('sentence');
      if (this.allTurns === 0) {
        this.router.navigate(['/game/result']);
      } else {
        this.gameService.setSentence(this.codeGame, newSentence.value).subscribe(res => {
          this.allTurns--;
          newSentence.reset('');
        });
      }
    }
  }

  onBack() {
    this.form.get('sentence').reset('');
  }

}
