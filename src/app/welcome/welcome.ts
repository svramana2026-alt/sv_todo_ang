import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../service/user-service';

@Component({
  imports: [RouterLink],
  selector: 'app-welcome',
  styleUrl: './welcome.css',
  templateUrl: './welcome.html',
})
export class Welcome implements OnInit{

  name : string = '';
  successMessage = 'Login successful. Welcome to the application';
  welcomeMessage : string = '';
  userData : any = {};

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private changeDetectorRef: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.userService.getWelcomeMessage().subscribe({
      next: (response: any) => this.handleSuccessfulResponse(response),
      error: (error: any) => this.handleErrorResponse(error)
    })  ;
  }

  handleSuccessfulResponse(response: any) {
    console.log(`Welcome.handleSuccessfulResponse() called `);
    this.welcomeMessage = response.message;
    this.userData = response;
    this.changeDetectorRef.markForCheck();
    console.log(`Welcome message : ${this.welcomeMessage} ` );
    console.log(`User data : ${JSON.stringify(this.userData)} ` );
  }

  handleErrorResponse(error: any) {
    console.log(`Welcome.handleErrorResponse() called `);
    this.welcomeMessage = error.error;
    this.changeDetectorRef.markForCheck();
    console.log(`Error message : ${this.welcomeMessage} ` );
  }
    
  }
