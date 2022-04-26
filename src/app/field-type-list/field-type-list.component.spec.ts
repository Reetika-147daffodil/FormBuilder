import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTypeListComponent } from './field-type-list.component';

describe('FieldTypeListComponent', () => {
  let component: FieldTypeListComponent;
  let fixture: ComponentFixture<FieldTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
