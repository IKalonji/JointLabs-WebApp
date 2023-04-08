import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZkPayrollComponent } from './zk-payroll.component';

describe('ZkPayrollComponent', () => {
  let component: ZkPayrollComponent;
  let fixture: ComponentFixture<ZkPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZkPayrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZkPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
