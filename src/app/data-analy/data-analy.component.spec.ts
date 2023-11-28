import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyComponent } from './data-analy.component';

describe('DataAnalyComponent', () => {
  let component: DataAnalyComponent;
  let fixture: ComponentFixture<DataAnalyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAnalyComponent]
    });
    fixture = TestBed.createComponent(DataAnalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
