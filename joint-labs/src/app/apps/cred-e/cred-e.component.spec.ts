import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredEComponent } from './cred-e.component';

describe('CredEComponent', () => {
  let component: CredEComponent;
  let fixture: ComponentFixture<CredEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
