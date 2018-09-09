import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesService } from './matches.service';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { MatchesRoutingModule } from './matches.routing';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { FrameComponent } from './frame/frame.component';
import { FrameFormComponent } from './frame-form/frame-form.component';
import { MatchScoreComponent } from './match-score/match-score.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatchesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  declarations: [
    MatchesListComponent,
    MatchDetailsComponent,
    FrameComponent,
    FrameFormComponent,
    MatchScoreComponent,
  ],
  providers: [
    MatchesService
  ]
})
export class MatchesModule { }
