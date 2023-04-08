import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnchainedComponent } from './unchained.component';

describe('UnchainedComponent', () => {
  let component: UnchainedComponent;
  let fixture: ComponentFixture<UnchainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnchainedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnchainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
