import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { Error } from './error/error';
import { TodoList } from './todo-list/todo-list';
import { AppHearder } from './app-hearder/app-hearder';
import { AppFooter } from './app-footer/app-footer';
import { Logout } from './logout/logout';
import { UsersList } from './users-list/users-list';
import { CustomerList } from './customer-list/customer-list';

@Component({
  imports: [
    RouterOutlet, 
    Welcome, Login, Error, TodoList, AppHearder, AppFooter, 
    Logout, UsersList,
    CustomerList
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title ='My App';
}
