import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevJavaComponent } from './dev-java.component';

describe('DevJavaComponent', () => {
  let component: DevJavaComponent;
  let fixture: ComponentFixture<DevJavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevJavaComponent]
    });
    fixture = TestBed.createComponent(DevJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
