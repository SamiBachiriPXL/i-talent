import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EindreflectieComponent } from './eindreflectie.component';

describe('EindreflectieComponent', () => {
  let component: EindreflectieComponent;
  let fixture: ComponentFixture<EindreflectieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EindreflectieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EindreflectieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
