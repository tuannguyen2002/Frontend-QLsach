import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsHoadonComponent } from './ds-hoadon.component';

describe('DsHoadonComponent', () => {
  let component: DsHoadonComponent;
  let fixture: ComponentFixture<DsHoadonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsHoadonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsHoadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
