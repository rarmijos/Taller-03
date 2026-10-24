import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Videojuego } from '../../services/videojuego';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  nombre = ""
  genero = ""
  plataforma = ""

  servicio = inject( Videojuego )
  router = inject(Router)

  guardar( videojuego : NgForm ){
    this.servicio.postVideojuego(videojuego.value)
  }

  cerrar(){
    localStorage.removeItem("login")
    this.router.navigate(["/login"])
  }

}
