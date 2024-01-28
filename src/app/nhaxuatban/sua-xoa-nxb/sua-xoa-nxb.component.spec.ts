import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaXoaNxbComponent } from './sua-xoa-nxb.component';

describe('SuaXoaNxbComponent', () => {
  let component: SuaXoaNxbComponent;
  let fixture: ComponentFixture<SuaXoaNxbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaXoaNxbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaXoaNxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
