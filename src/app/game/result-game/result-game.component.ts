import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-result-game',
  templateUrl: './result-game.component.html',
  styleUrls: ['./result-game.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultGameComponent implements OnInit {
  @Input() gridText = [];

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.getSencentes().subscribe(res => {
      this.gridText = res;
    });
  }

  onShowData() {
    this.gameService.getSencentes().subscribe(res => {
      this.gridText = res;
    });
  }
}
