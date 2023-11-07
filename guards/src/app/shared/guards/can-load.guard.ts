import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const canLoadGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  console.log(segments, route);
  if (segments[1]?.path === 'leads') {
    return true;
  }

  alert('Módulo não foi carregado');

  router.navigate(['']);
  return false;
};
