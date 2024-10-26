import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorCartaComponent } from './seletor-carta.component';

describe('SeletorCartaComponent', () => {
  let component: SeletorCartaComponent;
  let fixture: ComponentFixture<SeletorCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeletorCartaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeletorCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
