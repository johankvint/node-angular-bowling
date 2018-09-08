import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesService } from './matches.service';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { MatchesRoutingModule } from './matches.routing';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
  ],
  declarations: [
    MatchesListComponent
  ],
  providers: [
    MatchesService
  ]
})
export class MatchesModule { }
