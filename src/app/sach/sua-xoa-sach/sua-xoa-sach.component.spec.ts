import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaXoaSachComponent } from './sua-xoa-sach.component';

describe('SuaXoaSachComponent', () => {
  let component: SuaXoaSachComponent;
  let fixture: ComponentFixture<SuaXoaSachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaXoaSachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaXoaSachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
