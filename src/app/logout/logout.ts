import { Component , OnInit } from '@angular/core';
import { HardcodeAuthService } from '../service/hardcode-auth-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-logout',
  styleUrl: './logout.css',
  templateUrl: './logout.html',
})
export class Logout implements OnInit {
  constructor(private hardcodeAuthService: HardcodeAuthService) {
  }
  ngOnInit() {
    this.hardcodeAuthService.logout();
  }
}
