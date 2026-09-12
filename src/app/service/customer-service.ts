import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CustomerService implements OnInit {
    ngOnInit(): void {

    }
    constructor(private http: HttpClient) {
    }

    getAllCustomers(params?: HttpParams) {
        return this.http.get<any>('http://localhost:8080/v1/customer/getAllCustomers', { params });
    }
    
}
