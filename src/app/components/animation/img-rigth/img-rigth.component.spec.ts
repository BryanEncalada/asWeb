import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgRigthComponent } from './img-rigth.component';

describe('ImgRigthComponent', () => {
  let component: ImgRigthComponent;
  let fixture: ComponentFixture<ImgRigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgRigthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgRigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
