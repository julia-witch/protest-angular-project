import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterClothesComponent } from './winter-clothes.component';

describe('WinterClothesComponent', () => {
  let component: WinterClothesComponent;
  let fixture: ComponentFixture<WinterClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterClothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
