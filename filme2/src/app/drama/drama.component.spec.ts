import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaComponent } from './drama.component';

describe('DramaComponent', () => {
  let component: DramaComponent;
  let fixture: ComponentFixture<DramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DramaComponent]
    });
    fixture = TestBed.createComponent(DramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
