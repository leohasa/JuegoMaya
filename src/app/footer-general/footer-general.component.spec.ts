import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGeneralComponent } from './footer-general.component';

describe('FooterGeneralComponent', () => {
  let component: FooterGeneralComponent;
  let fixture: ComponentFixture<FooterGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
