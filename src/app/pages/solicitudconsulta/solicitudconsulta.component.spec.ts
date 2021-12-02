import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudconsultaComponent } from './solicitudconsulta.component';

describe('SolicitudconsultaComponent', () => {
  let component: SolicitudconsultaComponent;
  let fixture: ComponentFixture<SolicitudconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudconsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
