import { CanDeactivateFn } from '@angular/router';
import { AccountComponent } from 'src/app/shared/pages/account/account.component';

export const canDeactiveGuard: CanDeactivateFn<AccountComponent> = (
  component: AccountComponent,
  currentRoute,
  currentState,
  nextState
) => {
  console.log(currentRoute);
  console.log(currentState);
  console.log(nextState);

  return component.exit();
};
