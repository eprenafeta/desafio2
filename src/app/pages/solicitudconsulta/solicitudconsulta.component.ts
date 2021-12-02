import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitudconsulta',
  templateUrl: './solicitudconsulta.component.html',
  styleUrls: ['./solicitudconsulta.component.css']
})
export class SolicitudconsultaComponent implements OnInit {
  frmConsultaMedica = new FormGroup( {
    nombre :  new FormControl('', Validators.required),
    apellido :  new FormControl('', Validators.required) ,
    correo :  new FormControl('', Validators.email) ,
    tipo_practica :  new FormControl('', Validators.required) ,
    descripcion : new FormControl('', Validators.required) 
   
  });
  constructor() { }

  ngOnInit(): void {
  }

}
