import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompletedComponent } from './add-completed.component';

describe('AddCompletedComponent', () => {
  let component: AddCompletedComponent;
  let fixture: ComponentFixture<AddCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
