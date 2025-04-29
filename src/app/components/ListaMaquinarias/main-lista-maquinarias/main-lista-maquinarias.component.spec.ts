import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListaMaquinariasComponent } from './main-lista-maquinarias.component';

describe('MainListaMaquinariasComponent', () => {
  let component: MainListaMaquinariasComponent;
  let fixture: ComponentFixture<MainListaMaquinariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainListaMaquinariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainListaMaquinariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
