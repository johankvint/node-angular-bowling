import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameFormComponent } from './frame-form.component';

describe('FrameFormComponent', () => {
  let component: FrameFormComponent;
  let fixture: ComponentFixture<FrameFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
