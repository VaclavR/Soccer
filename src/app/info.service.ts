export class InfoService {

  constructor() { }

  positionChange(player) {
    if (player.position === '') {
      player.position = 'unknown';
    }
    console.log(player.name + ' is belong to the ' + player.position + ' family now!');
  }

}
