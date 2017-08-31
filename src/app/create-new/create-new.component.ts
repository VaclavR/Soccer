import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../players.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  pService: PlayersService;

  constructor(pService: PlayersService) {
    this.pService = pService;
   }

  ngOnInit() {

  }

  getPositions() {
    return this.pService.positions;
  }

  onSubmit(form) {
     if (form.invalid) {
      return;
      }
    this.pService.createPlayer(form.value);
  }

}
