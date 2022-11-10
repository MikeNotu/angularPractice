import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantItemComponent } from './attendant-item.component';

describe('AttendantItemComponent', () => {
  let component: AttendantItemComponent;
  let fixture: ComponentFixture<AttendantItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendantItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
