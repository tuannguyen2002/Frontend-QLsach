import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsTacgiaComponent } from './ds-tacgia.component';

describe('DsTacgiaComponent', () => {
  let component: DsTacgiaComponent;
  let fixture: ComponentFixture<DsTacgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsTacgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsTacgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
