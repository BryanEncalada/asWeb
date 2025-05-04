import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProductosComponent } from './main-productos.component';

describe('MainProductosComponent', () => {
  let component: MainProductosComponent;
  let fixture: ComponentFixture<MainProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
