import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaXoaTheloaiComponent } from './sua-xoa-theloai.component';

describe('SuaXoaTheloaiComponent', () => {
  let component: SuaXoaTheloaiComponent;
  let fixture: ComponentFixture<SuaXoaTheloaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaXoaTheloaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaXoaTheloaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
