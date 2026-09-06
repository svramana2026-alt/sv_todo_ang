import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodeAuthService } from '../service/hardcode-auth-service';
@Component({
  imports: [ FormsModule, CommonModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit{
  username = 'Ramana';
  password = 'ramana';
 
  invalidCredentials = false;

  constructor(private router: Router,
    private hardcodeAuthService: HardcodeAuthService
  ){

  }
  
  ngOnInit(): void {
    
  }

  doLogin(){
    console.log(this.username);
    if (this.hardcodeAuthService.authenticate(this.username, this.password)) {
      this.invalidCredentials = false;
      this.router.navigate(['welcome/ramana']);
    } else {
      this.invalidCredentials = true;
      // this.router.navigate(['error']);
    }
  }

  
}
