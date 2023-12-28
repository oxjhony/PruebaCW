import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanimetriaPage } from './planimetria.page';

describe('PlanimetriaPage', () => {
  let component: PlanimetriaPage;
  let fixture: ComponentFixture<PlanimetriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanimetriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
