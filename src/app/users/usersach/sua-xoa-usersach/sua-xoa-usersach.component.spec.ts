import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaXoaUsersachComponent } from './sua-xoa-usersach.component';

describe('SuaXoaUsersachComponent', () => {
  let component: SuaXoaUsersachComponent;
  let fixture: ComponentFixture<SuaXoaUsersachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaXoaUsersachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaXoaUsersachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
