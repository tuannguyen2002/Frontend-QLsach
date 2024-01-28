import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaHoadonComponent } from './them-sua-hoadon.component';

describe('ThemSuaHoadonComponent', () => {
  let component: ThemSuaHoadonComponent;
  let fixture: ComponentFixture<ThemSuaHoadonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaHoadonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaHoadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
