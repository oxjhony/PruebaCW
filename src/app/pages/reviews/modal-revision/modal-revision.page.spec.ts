import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalRevisionPage } from './modal-revision.page';

describe('ModalRevisionPage', () => {
  let component: ModalRevisionPage;
  let fixture: ComponentFixture<ModalRevisionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalRevisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
