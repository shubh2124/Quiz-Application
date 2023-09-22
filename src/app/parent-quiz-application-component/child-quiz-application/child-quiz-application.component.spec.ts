import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildQuizApplicationComponent } from './child-quiz-application.component';

describe('ChildQuizApplicationComponent', () => {
  let component: ChildQuizApplicationComponent;
  let fixture: ComponentFixture<ChildQuizApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildQuizApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildQuizApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
