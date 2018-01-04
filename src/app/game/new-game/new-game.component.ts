import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GameService} from '../game.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
      password: ['', Validators.required],
      turns: ['1']
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
    this.gameService.setInfogame(name, password, turns).subscribe(res => {
      this.newCode = res;
      this.dialog.open(this.dialogRef, {
        height: '200px',
        width: '300px'
      });
    });

  }

  onAccepted() {
    this.router.navigate(['/game/text']);
    this.dialog.closeAll();
  }

}
