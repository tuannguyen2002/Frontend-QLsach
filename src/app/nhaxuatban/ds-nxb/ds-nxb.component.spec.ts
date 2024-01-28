import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsNxbComponent } from './ds-nxb.component';

describe('DsNxbComponent', () => {
  let component: DsNxbComponent;
  let fixture: ComponentFixture<DsNxbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsNxbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsNxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
