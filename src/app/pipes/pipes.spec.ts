import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Pipes } from './pipes';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';

describe('Pipes', () => {
  let component: Pipes;
  let fixture: ComponentFixture<Pipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pipes, ShortenPipe, FilterPipe],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Pipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map stable/offline/critical to bootstrap classes', () => {
    expect(component.getStatusClasses({ status: 'stable' } as never)).toEqual({
      'list-group-item-success': true,
      'list-group-item-warning': false,
      'list-group-item-danger': false,
    });
    expect(component.getStatusClasses({ status: 'critical' } as never))[
      'list-group-item-danger'
    ].toBeTrue();
  });

  it('should add a server', () => {
    const before = component.servers.length;
    component.onAddServer();
    expect(component.servers.length).toBe(before + 1);
  });
});
