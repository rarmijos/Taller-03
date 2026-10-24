import { Injectable } from '@angular/core';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';
import { db } from './config';

@Injectable({
  providedIn: 'root',
})
export class Videojuego {
  //LEER
  getVideojuegos() {
    let videojuegos: any;
    const starCountRef = ref(db, 'videojuegos/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      videojuegos = data;
    });

    return videojuegos;
  }

  //Guardar
  postVideojuego(videojuego: any) {
    set(ref(db, 'videojuegos/' + videojuego.nombre), {
      genero: videojuego.genero,
      plataforma: videojuego.plataforma,
    });
  }

  //ELIMINAR
  deleteVideojuego(id: string) {
    remove(ref(db, 'videojuegos/' + id), );
  }

  //EDITAR
  editarVideojuego(videojuego: any) {
    update(ref(db, 'videojuegos/' + videojuego.nombre), {
      genero: videojuego.genero,
      plataforma: videojuego.plataforma,
    });
  }
}
