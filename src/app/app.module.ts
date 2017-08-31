import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { NavComponent } from './nav/nav.component';

import { PlayersService } from './players.service';
import { InfoService } from './info.service';

const routes = [
  {path: 'players', component: TabsComponent, children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: ':position', component: ListComponent}
  ]}
  ,
  {path: 'create-new', component: CreateNewComponent},
  {path: '**', redirectTo: '/players/all'}
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateNewComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlayersService, InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
