import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaXoaTacgiaComponent } from './sua-xoa-tacgia.component';

describe('SuaXoaTacgiaComponent', () => {
  let component: SuaXoaTacgiaComponent;
  let fixture: ComponentFixture<SuaXoaTacgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaXoaTacgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaXoaTacgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
