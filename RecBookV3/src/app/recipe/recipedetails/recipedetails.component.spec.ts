import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipedetailsComponent } from './recipedetails.component';

describe('RecipedetailsComponent', () => {
  let component: RecipedetailsComponent;
  let fixture: ComponentFixture<RecipedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
