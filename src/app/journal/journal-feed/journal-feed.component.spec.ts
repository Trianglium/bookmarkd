import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalFeedComponent } from './journal-feed.component';

describe('JournalFeedComponent', () => {
  let component: JournalFeedComponent;
  let fixture: ComponentFixture<JournalFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
