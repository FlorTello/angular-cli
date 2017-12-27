import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GameService} from '../game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  form;

  constructor(private fb: FormBuilder,
              private router: Router,
              private gameService: GameService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      players: ['', Validators.pattern(/^[0-9]$/)],
      password: ['', Validators.required],
      turns: ['', Validators.pattern(/^[0-9]$/)]
    });
  }


  submit() {
    if (this.form.invalid) {
      return;
    }

    const name = this.form.get('name').value;
    const players = this.form.get('players').value;
    const password = this.form.get('password').value;
    const turns = this.form.get('turns').value;

    const game = {
      name: name,
      players: players,
      password: password,
      turns: turns
    };
    console.log(game);
    this.gameService.setInfogame('1', name, password, players, turns).subscribe(res => console.log('addGame', res));
    this.router.navigate(['/game/text']);

  }


}
