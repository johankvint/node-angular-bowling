import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesListComponent } from './matches-list/matches-list.component';

const routes: Routes = [
    {
        path: '',
        component: MatchesListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MatchesRoutingModule { }
