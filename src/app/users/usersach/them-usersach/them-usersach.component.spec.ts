import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemUsersachComponent } from './them-usersach.component';

describe('ThemUsersachComponent', () => {
  let component: ThemUsersachComponent;
  let fixture: ComponentFixture<ThemUsersachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemUsersachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemUsersachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
