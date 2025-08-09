import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLefComponent } from './img-lef.component';

describe('ImgLefComponent', () => {
  let component: ImgLefComponent;
  let fixture: ComponentFixture<ImgLefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgLefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgLefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
