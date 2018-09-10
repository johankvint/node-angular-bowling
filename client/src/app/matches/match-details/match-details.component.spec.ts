import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDetailsComponent } from './match-details.component';
import { MatchScoreComponent } from '../match-score/match-score.component';
import { FrameComponent } from '../frame/frame.component';
import { FrameFormComponent } from '../frame-form/frame-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MatchDetailsComponent', () => {
  let component: MatchDetailsComponent;
  let fixture: ComponentFixture<MatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        MatchDetailsComponent,
        MatchScoreComponent,
        FrameComponent,
        FrameFormComponent,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
