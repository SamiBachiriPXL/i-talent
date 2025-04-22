import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectieComponent } from './selectie.component';

describe('SelectieComponent', () => {
  let component: SelectieComponent;
  let fixture: ComponentFixture<SelectieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
