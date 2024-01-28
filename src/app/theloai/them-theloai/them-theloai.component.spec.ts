import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemTheloaiComponent } from './them-theloai.component';

describe('ThemTheloaiComponent', () => {
  let component: ThemTheloaiComponent;
  let fixture: ComponentFixture<ThemTheloaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemTheloaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemTheloaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
