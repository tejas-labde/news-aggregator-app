import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOptionsContainerComponent } from './filter-options-container.component';

describe('FilterOptionsContainerComponent', () => {
  let component: FilterOptionsContainerComponent;
  let fixture: ComponentFixture<FilterOptionsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterOptionsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterOptionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
