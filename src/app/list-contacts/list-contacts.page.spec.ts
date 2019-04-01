import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContactsPage } from './list-contacts.page';

describe('ListContactsPage', () => {
  let component: ListContactsPage;
  let fixture: ComponentFixture<ListContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
