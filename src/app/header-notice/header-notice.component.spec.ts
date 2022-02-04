import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNoticeComponent } from './header-notice.component';

describe('HeaderNoticeComponent', () => {
  let component: HeaderNoticeComponent;
  let fixture: ComponentFixture<HeaderNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
