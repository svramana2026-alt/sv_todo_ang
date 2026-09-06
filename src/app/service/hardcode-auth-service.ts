import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, OnInit, PLATFORM_ID, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthService implements OnInit{
  private readonly loggedIn = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loggedIn.set(sessionStorage.getItem('authenticatedUser') !== null);
    }
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  authenticate(username: string, password: string): boolean {
    console.log('before ' + this.isUserLoggedIn());
    if (isPlatformBrowser(this.platformId) && username === 'Ramana' && password === 'ramana') {
      sessionStorage.setItem('authenticatedUser', username);
      this.loggedIn.set(true);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  
  isUserLoggedIn(): boolean {
    return this.loggedIn();
  }
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('authenticatedUser');
    }
    this.loggedIn.set(false);
  }
}
