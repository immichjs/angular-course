import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const canActiveChildGuard: CanActivateChildFn = (childRoute, state) => {
  console.log(childRoute, state);
  const router = inject(Router);

  if (
    childRoute.queryParams['account'] === 'admin' &&
    childRoute.queryParams['password'] === '1234'
  ) {
    return true;
  }

  router.navigate(['']);

  return false;
};
