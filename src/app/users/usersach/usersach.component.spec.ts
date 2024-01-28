import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersachComponent } from './usersach.component';

describe('UsersachComponent', () => {
  let component: UsersachComponent;
  let fixture: ComponentFixture<UsersachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
