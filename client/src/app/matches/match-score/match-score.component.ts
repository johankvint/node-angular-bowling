import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Match, MatchUtils } from '@shared';

@Component({
  selector: 'app-match-score',
  templateUrl: './match-score.component.html',
  styleUrls: ['./match-score.component.css']
})
export class MatchScoreComponent implements OnChanges {
  @Input() match: Match;

  score = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.match) {
      this.score = MatchUtils.getMatchScore(this.match);
    }
  }

}
