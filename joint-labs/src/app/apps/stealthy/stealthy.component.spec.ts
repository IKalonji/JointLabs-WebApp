import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthyComponent } from './stealthy.component';

describe('StealthyComponent', () => {
  let component: StealthyComponent;
  let fixture: ComponentFixture<StealthyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StealthyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
