import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriteriaEvidencesPage } from './criteria-evidences.page';

describe('CriteriaEvidencesPage', () => {
  let component: CriteriaEvidencesPage;
  let fixture: ComponentFixture<CriteriaEvidencesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriteriaEvidencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
