import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCardComponent } from './portfolio-card.component';

describe('PortfolioCardComponent', () => {
  let component: PortfolioCardComponent;
  let fixture: ComponentFixture<PortfolioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
