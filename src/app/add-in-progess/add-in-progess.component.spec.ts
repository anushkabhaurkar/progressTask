import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInProgessComponent } from './add-in-progess.component';

describe('AddInProgessComponent', () => {
  let component: AddInProgessComponent;
  let fixture: ComponentFixture<AddInProgessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInProgessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInProgessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
