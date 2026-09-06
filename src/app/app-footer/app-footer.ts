import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-app-footer',
  styleUrl: './app-footer.css',
  templateUrl: './app-footer.html',
})
export class AppFooter implements OnInit {

  footerText: string = 'All Rights Reserved 2026 @SVRamana';
  constructor() {
  }
  ngOnInit() {
  }
}
