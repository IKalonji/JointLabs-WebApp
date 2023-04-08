import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperDBComponent } from './cooper-db.component';

describe('CooperDBComponent', () => {
  let component: CooperDBComponent;
  let fixture: ComponentFixture<CooperDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
