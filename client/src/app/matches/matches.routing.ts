import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';

const routes: Routes = [
    {
        path: '',
        component: MatchesListComponent
    },
    {
        path: ':id',
        component: MatchDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MatchesRoutingModule { }
