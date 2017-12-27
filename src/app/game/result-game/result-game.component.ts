import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-result-game',
  templateUrl: './result-game.component.html',
  styleUrls: ['./result-game.component.scss']
})
export class ResultGameComponent implements OnInit {
  gridText = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onShowData() {
    this.userService.getSencentes().subscribe(res => {
      this.gridText = res;
    });
  }
}
