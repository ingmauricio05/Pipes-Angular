import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  
  // i18nSelect
  nombre: string= "Mauricio";
  genero: string = "masculino";  

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i180nPlural
  clientes:string[] = ['Maria', 'Pedro', 'Pepe', 'Ana', 'Jorge'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre="Melisa";
    this.genero="femenino";
  }

  borrarCliene(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona={
    nombre:'Mauricio',
    Edad: 34,
    Direccion: 'Medellín, Colombia'
  }

  //Json Pipe
  heroes=[
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(2000);//0,1,2,3...

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500)
  });
}
