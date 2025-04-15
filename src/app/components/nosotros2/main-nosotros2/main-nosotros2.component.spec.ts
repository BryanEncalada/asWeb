import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNosotros2Component } from './main-nosotros2.component';

describe('MainNosotros2Component', () => {
  let component: MainNosotros2Component;
  let fixture: ComponentFixture<MainNosotros2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNosotros2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNosotros2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
