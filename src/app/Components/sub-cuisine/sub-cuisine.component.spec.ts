import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCuisineComponent } from './sub-cuisine.component';

describe('SubCuisineComponent', () => {
  let component: SubCuisineComponent;
  let fixture: ComponentFixture<SubCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCuisineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
