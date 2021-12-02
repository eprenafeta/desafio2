import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitudconsulta',
  templateUrl: './solicitudconsulta.component.html',
  styleUrls: ['./solicitudconsulta.component.css']
})
export class SolicitudconsultaComponent implements OnInit {
  
  frmConsultaMedica = this.fb.group ( {
    nombre :   [ '', Validators.required ],
    apellido :   [ '', Validators.required ],
    correo :   [ '', Validators.email ],
    tipo_practica : [ '', Validators.required ],
    descripcion :  [ '',  Validators.required ] 
  });

  submitted = false
  constructor( private fb: FormBuilder ) { }
  ngOnInit(): void {
    
    
    
  }

  guardar() {
    console.log(this.frmConsultaMedica)
  }

}
