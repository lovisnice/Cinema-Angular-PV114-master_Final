import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, Route, Router, RouterStateSnapshot, UrlTree, mapToCanActivate } from '@angular/router';
import { AccountService } from './components/account/account.service';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private router: Router,
    private accountService: AccountService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // result value: true: user can activete the route, false - cannot...
    if (!this.accountService.isAuthorized()) {
      this.router.navigateByUrl('/login');
      return false;
    }
    else {
      return true;
    }
  }
}

export const AuthorizedGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate(route, state);
};


// export class AuthorizedGuard implements CanActivate {
//   constructor(private accountService: AccountService, private router: Router) { }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     // result value: true: user can activete the route, false - cannot...
//     if (!this.accountService.isAuthorized()) {
//       this.router.navigateByUrl('/login');
//       return false;
//     }
//     else {
//       return true;
//     }
//   }
// }

// @Injectable({providedIn: 'root'})
// export class AuthorizedGuard {
//   constructor(private router: Router,
//     private accountService: AccountService) { }
//   canActivate() {
//     if (!this.accountService.isAuthorized()) {
//       this.router.navigateByUrl('/login');
//       return false;
//     }
//     else {
//       return true;
//     }

//   }
// }

// export const canActivate: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   const accountService = inject(AccountService);
//   const router = inject(Router);
//    if (!accountService.isAuthorized()) {
//       router.navigateByUrl('/login');
//       return false;
//     }
//        return true;
  
//   };

// export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);