import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NahualComponent } from './nahual.component';

describe('NahualComponent', () => {
  let component: NahualComponent;
  let fixture: ComponentFixture<NahualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NahualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NahualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
