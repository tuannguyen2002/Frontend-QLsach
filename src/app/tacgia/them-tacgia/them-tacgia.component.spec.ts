import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemTacgiaComponent } from './them-tacgia.component';

describe('ThemTacgiaComponent', () => {
  let component: ThemTacgiaComponent;
  let fixture: ComponentFixture<ThemTacgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemTacgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemTacgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
