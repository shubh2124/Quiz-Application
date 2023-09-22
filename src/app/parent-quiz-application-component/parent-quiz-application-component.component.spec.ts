import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQuizApplicationComponentComponent } from './parent-quiz-application-component.component';

describe('ParentQuizApplicationComponentComponent', () => {
  let component: ParentQuizApplicationComponentComponent;
  let fixture: ComponentFixture<ParentQuizApplicationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentQuizApplicationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQuizApplicationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
