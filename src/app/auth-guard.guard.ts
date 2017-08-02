import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

const TOKEN_KEY = 'infinityToken';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

   canActivate(): boolean {
        if (!localStorage.getItem(TOKEN_KEY)) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
      
}