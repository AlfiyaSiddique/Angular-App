import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddEditComponent } from './list-add-edit.component';

describe('ListAddEditComponent', () => {
  let component: ListAddEditComponent;
  let fixture: ComponentFixture<ListAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
