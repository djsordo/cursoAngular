import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorSolicitanteComponent } from './selector-solicitante.component';

describe('SelectorSolicitanteComponent', () => {
  let component: SelectorSolicitanteComponent;
  let fixture: ComponentFixture<SelectorSolicitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorSolicitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
