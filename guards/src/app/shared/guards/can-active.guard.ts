import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActiveGuard: CanActivateFn = (route, state) => {
  const { account, password } = route.queryParams;
  const router = inject(Router);

  if (account === 'admin' && password === '1234') {
    return true;
  }

  router.navigate(['']);
  return false;
};
