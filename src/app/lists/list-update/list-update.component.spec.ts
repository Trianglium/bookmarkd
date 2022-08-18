import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUpdateComponent } from './list-update.component';

describe('ListUpdateComponent', () => {
  let component: ListUpdateComponent;
  let fixture: ComponentFixture<ListUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
