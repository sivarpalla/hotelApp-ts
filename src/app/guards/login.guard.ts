import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

export class loginGuard {

  constructor(private loginService: LoginService,
     private router: Router) { 
    console.log('login guard');
  }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean> | boolean {
    if(this.loginService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
