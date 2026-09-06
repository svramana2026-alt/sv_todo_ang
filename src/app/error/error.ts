import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-error',
  styleUrl: './error.css',
  templateUrl: './error.html',
})
export class Error implements OnInit{
  errorMessage = 'Something went wrong. Please conenct with administrator';

  constructor(){
    
  }
  ngOnInit(): void {
    
  }
}
