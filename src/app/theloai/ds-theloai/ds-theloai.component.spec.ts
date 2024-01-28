import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsTheloaiComponent } from './ds-theloai.component';

describe('DsTheloaiComponent', () => {
  let component: DsTheloaiComponent;
  let fixture: ComponentFixture<DsTheloaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsTheloaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsTheloaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
