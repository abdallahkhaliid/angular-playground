import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tdf } from './tdf';

describe('Tdf', () => {
  let component: Tdf;
  let fixture: ComponentFixture<Tdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
