import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsSachComponent } from './ds-sach.component';

describe('DsSachComponent', () => {
  let component: DsSachComponent;
  let fixture: ComponentFixture<DsSachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsSachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsSachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
