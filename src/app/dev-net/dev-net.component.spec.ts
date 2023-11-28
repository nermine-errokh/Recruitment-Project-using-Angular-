import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevNetComponent } from './dev-net.component';

describe('DevNetComponent', () => {
  let component: DevNetComponent;
  let fixture: ComponentFixture<DevNetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevNetComponent]
    });
    fixture = TestBed.createComponent(DevNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
