import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacgiaComponent } from './tacgia.component';

describe('TacgiaComponent', () => {
  let component: TacgiaComponent;
  let fixture: ComponentFixture<TacgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
