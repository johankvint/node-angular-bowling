import { Component, OnInit } from '@angular/core';
import { Match, Frame } from '@shared';
import { MatchesService } from '../matches.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  match: Match;

  constructor(
    private service: MatchesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.service.getMatch(this.route.snapshot.params.id)
      .subscribe(match => this.match = match);
  }

  addFrame(frame: Frame) {
    this.service.addMatchFrame(this.match.id, frame)
      .subscribe(match => this.match = match);
  }
}
