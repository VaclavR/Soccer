import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { InfoService } from './info.service';

@Injectable()

export class PlayersService {

  iService: InfoService;
  private players = [
    {name: 'Rosický', position: 'midfielders'},
    {name: 'Lafata', position: 'strikers'},
    {name: 'Kaya', position: 'defenders'},
    {name: 'Mavuba', position: 'midfielders'},
    {name: 'Ben Chaim', position: 'midfielders'},
    {name: 'Plavšić', position: 'midfielders'},
    {name: 'Koubek', position: 'goalkeepers'}
  ];

  positions = [
    {display: 'Unknown', value: ''},
    {display: 'Goalkeeper', value: 'goalkeepers'},
    {display: 'Defender', value: 'defenders'},
    {display: 'Midfielder', value: 'midfielders'},
    {display: 'Striker', value: 'strikers'}
  ];

  changedPosition = new Subject<void>();

  constructor(iService: InfoService) {
    this.iService = iService;
   }

  changePlayerPosition(changedPlayer) {
    const pos = this.players.findIndex((player) => {
      return player.name === changedPlayer.name;
    });
    this.players[pos].position = changedPlayer.position;
    this.changedPosition.next();
    this.iService.positionChange(changedPlayer);
  }

  returnPlayers(filter) {
    if (filter === 'all') {
      return this.players.slice();
    }
    return this.players.filter((player) => {
      return player.position === filter;
    });
  }

  returnPositions() {
    return this.positions;
  }

  createPlayer(player) {
    this.players.push(player);
    console.log(player);
  }

}
