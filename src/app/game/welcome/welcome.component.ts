import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onNewGame() {
    this.router.navigate(['/game/new']);
  }

  onJoinGame() {
    this.router.navigate(['/game/join']);
  }

}
