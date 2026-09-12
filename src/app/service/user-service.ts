import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService implements OnInit , OnDestroy {

    constructor(private http: HttpClient) {
    }
    ngOnInit(): void {
    }
    
    ngOnDestroy(): void {
    }

    getWelcomeMessage(): Observable<any> {
       console.log(`UserService.getWelcomeMessage() called `);
       return this.http.get('http://localhost:8080/v1/user/userName');
    }
}
