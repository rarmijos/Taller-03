import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Videojuego } from '../../services/videojuego';

@Component({
  selector: 'app-tabla',
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class Tabla {

  servicios = inject(Videojuego)

  videojuegos = this.servicios.getVideojuegos()

  videoArreglo = Object.entries(this.videojuegos || {}).map( ([key, val]: [string, any]) => ({
    nombre: key,
    genero: val.genero,
    plataforma: val.plataforma
  }
) )

plataforma = ""

cambiarPlataforma(valor: string){
  this.plataforma = valor
  if (this.plataforma == "PC") {
    localStorage.setItem("token", "true")
  }else{
    localStorage.setItem("token", "false")
  }
}

}
