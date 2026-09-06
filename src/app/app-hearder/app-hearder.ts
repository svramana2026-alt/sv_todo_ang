import { Component, OnInit, OnChanges } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HardcodeAuthService } from '../service/hardcode-auth-service';
import { NgIf } from "@angular/common";

@Component({
  imports: [RouterLink, NgIf],
  selector: 'app-app-hearder',
  styleUrl: './app-hearder.css',
  templateUrl: './app-hearder.html',
})
export class AppHearder implements OnInit, OnChanges {

  constructor(public hardcodeAuthService: HardcodeAuthService) {
  }
  ngOnInit() {
    // this.hardcodeAuthService.isUserLoggedIn();
  }   
  
  ngOnChanges() {
    // this.hardcodeAuthService.isUserLoggedIn();
  }
}
