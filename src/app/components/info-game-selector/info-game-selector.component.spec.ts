import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGameSelectorComponent } from './info-game-selector.component';

describe('InfoGameSelectorComponent', () => {
  let component: InfoGameSelectorComponent;
  let fixture: ComponentFixture<InfoGameSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGameSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGameSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
