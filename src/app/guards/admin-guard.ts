import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {

  let acceso = localStorage.getItem("rol")
  if ( acceso == "admin" ) {
    return true;
  }else{
    return false;
  }

};