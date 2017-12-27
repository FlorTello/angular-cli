import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {GameService} from '../game.service';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.scss']
})
export class AddTextComponent implements OnInit {
  form;
  allTurns;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private gameService: GameService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      sentence: ['', Validators.required]
    });

    this.allTurns = this.gameService.getTurnsgame('1');

  }

  onAdd() {

    if (this.form.valid) {
      const newSentence = this.form.get('sentence');
      if (this.allTurns > 0) {
        this.userService.setSentence('1', newSentence.value).subscribe(res => {
          newSentence.reset('');
          this.allTurns--;
        });
      } else {
        this.router.navigate(['/game/result']);
      }
    }
  }

  onBack() {
    this.form.get('sentence').reset('');
  }

}
