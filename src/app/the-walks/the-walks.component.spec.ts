import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWalksComponent } from './the-walks.component';

describe('TheWalksComponent', () => {
  let component: TheWalksComponent;
  let fixture: ComponentFixture<TheWalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheWalksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
