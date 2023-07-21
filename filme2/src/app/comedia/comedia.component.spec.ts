import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComediaComponent } from './comedia.component';

describe('ComediaComponent', () => {
  let component: ComediaComponent;
  let fixture: ComponentFixture<ComediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComediaComponent]
    });
    fixture = TestBed.createComponent(ComediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
