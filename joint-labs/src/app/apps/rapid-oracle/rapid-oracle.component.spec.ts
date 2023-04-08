import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidOracleComponent } from './rapid-oracle.component';

describe('RapidOracleComponent', () => {
  let component: RapidOracleComponent;
  let fixture: ComponentFixture<RapidOracleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapidOracleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidOracleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
