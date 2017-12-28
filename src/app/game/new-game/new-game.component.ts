import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GameService} from '../game.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  form;
  newCode;
  @ViewChild('dialogViewCode') dialogRef;


  constructor(private fb: FormBuilder,
              private router: Router,
              private gameService: GameService,
              private dialog: MatDialog) {
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
    const password = this.form.get('password').value;
    const turns = this.form.get('turns').value;

    const game = {
      name: name,
      password: password,
      turns: turns
    };
    console.log(game);
    this.gameService.setInfogame(name, password, turns).subscribe(res => {
      this.newCode = res;
      this.dialog.open(this.dialogRef, {
        height: '200px',
        width: '300px'
      });
      console.log('addGame', res);
    });

  }

  onAccepted() {
    this.router.navigate(['/game/text']);
    this.dialog.closeAll();
  }

}
