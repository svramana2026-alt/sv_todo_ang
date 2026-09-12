import { HttpClient, HttpParams } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  imports: [NgFor, NgForOf, NgIf],
  selector: 'app-users-list',
  styleUrl: './users-list.css',
  templateUrl: './users-list.html',
})
export class UsersList implements OnInit {

  userList: User[] = [];
  currentPage = 1;
  readonly pageSize = 10;
  totalPages = 1;

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  constructor(private http: HttpClient, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number): void {
    const params = new HttpParams()
      .set('page', page - 1)
      .set('size', this.pageSize);

    this.http.get<UserPage>('http://localhost:8080/v1/user/users/info', { params }).subscribe({
      next: (response: UserPage) => {
        this.userList = response.content;
        this.currentPage = response.number + 1;
        this.totalPages = Math.max(1, response.totalPages);
        console.log(`UsersList.ngOnInit() called `);
        console.log(`User list : ${JSON.stringify(this.userList)} ` );
        this.changeDetectorRef.markForCheck();
      },
      error: (error: any) => {
        console.log(`UsersList.ngOnInit() error called `);
        console.log(`Error message : ${error.message} ` );
        this.changeDetectorRef.markForCheck();
      }
    }); 
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadPage(page);
    }
  }

  goToPreviousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  goToNextPage(): void {
    this.goToPage(this.currentPage + 1);
  }
}

interface UserPage {
  content: User[];
  number: number;
  totalPages: number;
}

export class User {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  joiningDate: Date;
  message: string;
  emailId: string;

  constructor(id: number, firstName: string, lastName: string, gender: string, phoneNumber: string, joiningDate: Date, message: string, emailId: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.joiningDate = joiningDate;
    this.message = message;
    this.emailId = emailId;

  }
}
