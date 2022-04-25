import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinadorComponent } from './adivinador.component';

describe('AdivinadorComponent', () => {
  let component: AdivinadorComponent;
  let fixture: ComponentFixture<AdivinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
