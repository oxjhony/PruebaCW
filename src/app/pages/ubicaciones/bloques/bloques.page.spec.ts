import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BloquesPage } from './bloques.page';

describe('BloquesPage', () => {
  let component: BloquesPage;
  let fixture: ComponentFixture<BloquesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BloquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
