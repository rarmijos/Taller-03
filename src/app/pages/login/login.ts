import { Component, inject } from '@angular/core';
import { Usuario } from '../../services/usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email= ""
  password= ""

  servicio = inject(Usuario)

  login(){
    this.servicio.getUsuario().subscribe({
      next:(usuarios: any[]) =>{
        const usuario = usuarios.find(
          (u)=> u.email == this.email && u.password == this.password
        )

        if (usuario) {
          localStorage.setItem("login", "true")
          localStorage.setItem("rol", usuario.rol)
          alert("Correcto")
        }
      }
    })
  }

}
