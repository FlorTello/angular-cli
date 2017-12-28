import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-result-game',
  templateUrl: './result-game.component.html',
  styleUrls: ['./result-game.component.scss']
})
export class ResultGameComponent implements OnInit {
  gridText = [];

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
