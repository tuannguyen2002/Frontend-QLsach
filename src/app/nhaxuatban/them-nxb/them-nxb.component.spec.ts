import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemNxbComponent } from './them-nxb.component';

describe('ThemNxbComponent', () => {
  let component: ThemNxbComponent;
  let fixture: ComponentFixture<ThemNxbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemNxbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemNxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
