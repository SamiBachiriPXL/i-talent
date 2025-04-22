import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectweekComponent } from './projectweek.component';

describe('ProjectweekComponent', () => {
  let component: ProjectweekComponent;
  let fixture: ComponentFixture<ProjectweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectweekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
