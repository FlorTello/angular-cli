import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GameService} from '../game.service';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JoinGameComponent implements OnInit {
  form;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private gameService: GameService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      codeGame: ['', Validators.required]
    });
  }

  onBack() {
    this.router.navigate(['/game/welcome']);
  }

  onJoin() {
    const textCode = this.form.get('codeGame').value;
    this.gameService.getCodeGame(textCode).subscribe(res => {
      this.router.navigate(['/game/text']);
    }, error => console.log('game not found'));
  }


}
