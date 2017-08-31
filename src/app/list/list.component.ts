import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlayersService } from './../players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  pService: PlayersService;
  activatedRoute: ActivatedRoute;
  players = [];
  subscription;
  loadedList = "All";

  constructor(pService: PlayersService, activatedRoute: ActivatedRoute) {
    this.pService = pService;
    this.activatedRoute = activatedRoute;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.players = this.pService.returnPlayers(params.position);
        this.loadedList = params.position;
      }
    );
    this.subscription = this.pService.changedPosition.subscribe(
      () => this.players = this.pService.returnPlayers(this.loadedList)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
