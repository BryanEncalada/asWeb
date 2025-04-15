import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersNosotrosComponent } from './banners-nosotros.component';

describe('BannersNosotrosComponent', () => {
  let component: BannersNosotrosComponent;
  let fixture: ComponentFixture<BannersNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannersNosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
