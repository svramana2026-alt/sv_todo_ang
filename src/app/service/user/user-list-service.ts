import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, OnDestroy } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserListService implements OnInit , OnDestroy {

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
    }
    
    ngOnDestroy(): void {
    }

    getUserList(): string {
       console.log(`UserListService.getUserList() called `);
       return "http://localhost:8080/v1/user/userList";
    }

}
