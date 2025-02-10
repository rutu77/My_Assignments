import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListComponent } from './foodlist.component';

describe('FoodlistComponent', () => {
  let component: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
