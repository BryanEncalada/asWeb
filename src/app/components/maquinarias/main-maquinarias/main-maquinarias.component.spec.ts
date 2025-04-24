import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMaquinariasComponent } from './main-maquinarias.component';

describe('MainMaquinariasComponent', () => {
  let component: MainMaquinariasComponent;
  let fixture: ComponentFixture<MainMaquinariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMaquinariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMaquinariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
