
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesListComponent } from './matches-list.component';

describe('MatchesListComponent', () => {
  let component: MatchesListComponent;
  let fixture: ComponentFixture<MatchesListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
