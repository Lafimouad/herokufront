import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditAutoComponent } from './credit-auto.component';

describe('CreditAutoComponent', () => {
  let component: CreditAutoComponent;
  let fixture: ComponentFixture<CreditAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
