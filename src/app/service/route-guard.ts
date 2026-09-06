import { Service, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HardcodeAuthService } from './hardcode-auth-service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private hardcodeAuthService: HardcodeAuthService,
    private router: Router
  ) {

  }

  canActivate(): boolean {
    if (this.hardcodeAuthService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
