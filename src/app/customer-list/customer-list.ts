import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer-service';
import { HttpParams } from '@angular/common/http';
import { NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  imports: [NgFor, NgIf, NgForOf],
  selector: 'app-customer-list',
  styleUrl: './customer-list.css',
  templateUrl: './customer-list.html',
})
export class CustomerList implements OnInit {

    userList: Customer[] = [];
    currentPage = 1;
    readonly pageSize = 10;
    totalPages = 1;
  
    get pages(): number[] {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    }

  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  customers: Customer[] = [];

  constructor(private customerService: CustomerService,
    private changeDetectorRef: ChangeDetectorRef 
  ) {
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe((data: any) => {
      this.customers = data;
    });
  }

  loadPage(page: number): void {
    const params = new HttpParams()
      .set('page', page - 1)
      .set('size', this.pageSize);

    this.customerService.getAllCustomers(params).subscribe({
      next: (response: CustomerPage) => {
        this.customers = response.content;
        this.currentPage = response.number + 1;
        this.totalPages = response.totalPages;
        console.log(`CustomerList.ngOnInit() called `);
        console.log(`Customer list : ${JSON.stringify(this.customers)} ` );
        this.changeDetectorRef.markForCheck();
      },
      error: (error: any) => {
        console.log(`CustomerList.ngOnInit() error called `);
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

export class Customer{
[x: string]: any;
  customerNumber!: number;
  customerName!: string;
  contactFirstName!: string;
  contactLastName!: string;
    phone!: string;
    addressLine1!: string;
    addressLine2!: string;
    city!: string;
    state!: string;
    postalCode!: string;
    country!: string;
    salesRepEmployeeNumber!: number;
    creditLimit!: number;

    constructor(customerNumber: number, customerName: string, contactFirstName: string, contactLastName: string, phone: string, addressLine1: string, addressLine2: string, city: string, state: string, postalCode: string, country: string, salesRepEmployeeNumber: number, creditLimit: number) {
        this.customerNumber = customerNumber;
        this.customerName = customerName;
        this.contactFirstName = contactFirstName;
        this.contactLastName = contactLastName;
        this.phone = phone;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.country = country;
        this.salesRepEmployeeNumber = salesRepEmployeeNumber;
        this.creditLimit = creditLimit;
        this.contactLastName = contactLastName;
    }   
  
}

interface CustomerPage {
  content: Customer[];
  number: number;
  totalPages: number;
}
