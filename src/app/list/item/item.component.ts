import { Component, OnInit, Input } from '@angular/core';

import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() player;
  pService: PlayersService;
  presetPosition;

  constructor(pService: PlayersService) {
    this.pService = pService;
   }

  ngOnInit() {
    this.presetPosition = this.player.position;
  }

  getPositions() {
    return this.pService.positions;
  }

  onSubmit(form) {
    this.player.position = form.value.position;
    this.pService.changePlayerPosition(this.player);
  }

}
