import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIXIComponent } from './pixi.component';

describe('PIXIComponent', () => {
  let component: PIXIComponent;
  let fixture: ComponentFixture<PIXIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PIXIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PIXIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
