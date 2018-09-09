import { Component, OnInit, Input } from '@angular/core';
import { Frame, FrameType, MatchUtils } from '@shared';
import {  } from 'module';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  @Input() index: number;
  @Input() frame: Frame;

  type: string;

  ngOnInit() {
    const frameType = MatchUtils.getFrameType(this.frame);
    if (frameType === FrameType.Open) {
      this.type = 'Open';
    } else if (frameType === FrameType.Strike) {
      this.type = 'Strike';
    } else if (frameType === FrameType.Spare) {
      this.type = 'Spare';
    }
  }

}
