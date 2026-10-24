import { Component, inject } from '@angular/core';
import { Usuario } from '../../services/usuario';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  servicio = inject(Usuario);
  router = inject(Router);

  nombre = '';
  email = '';
  password = '';
  rol = 'usuario';

  registro(formulario: NgForm) {
    this.servicio.postUsuario(formulario.value).subscribe({
      next: () => {
        alert('Registro exitoso. Por favor inicia sesión');
        this.router.navigate(['/login']);
      },
    });
  }
}
