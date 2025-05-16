import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DscEmpresaCuadrosComponent } from './dsc-empresa-cuadros.component';

describe('DscEmpresaCuadrosComponent', () => {
  let component: DscEmpresaCuadrosComponent;
  let fixture: ComponentFixture<DscEmpresaCuadrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DscEmpresaCuadrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DscEmpresaCuadrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
