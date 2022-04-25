import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoEnlaceComponent } from './juego-enlace.component';

describe('JuegoEnlaceComponent', () => {
  let component: JuegoEnlaceComponent;
  let fixture: ComponentFixture<JuegoEnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoEnlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
