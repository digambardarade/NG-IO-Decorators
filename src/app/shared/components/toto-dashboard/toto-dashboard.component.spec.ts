import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotoDashboardComponent } from './toto-dashboard.component';

describe('TotoDashboardComponent', () => {
  let component: TotoDashboardComponent;
  let fixture: ComponentFixture<TotoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
