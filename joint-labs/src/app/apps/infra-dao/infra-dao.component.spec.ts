import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraDAOComponent } from './infra-dao.component';

describe('InfraDAOComponent', () => {
  let component: InfraDAOComponent;
  let fixture: ComponentFixture<InfraDAOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraDAOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraDAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
