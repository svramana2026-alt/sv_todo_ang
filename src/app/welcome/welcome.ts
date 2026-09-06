import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-welcome',
  styleUrl: './welcome.css',
  templateUrl: './welcome.html',
})
export class Welcome implements OnInit{

  name : string = '';
  successMessage = 'Login successful. Welcome to the application';

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }
}
