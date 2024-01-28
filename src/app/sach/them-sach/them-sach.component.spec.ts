import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSachComponent } from './them-sach.component';

describe('ThemSachComponent', () => {
  let component: ThemSachComponent;
  let fixture: ComponentFixture<ThemSachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
