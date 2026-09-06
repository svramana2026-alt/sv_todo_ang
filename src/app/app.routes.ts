import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Error } from './error/error';
import { TodoList } from './todo-list/todo-list';
import { Logout } from './logout/logout';
import { RouteGuard } from './service/route-guard';

export const routes: Routes = [
    {path:'', component: Login},
    {path:'login',component: Login},
    {path: 'welcome/:name', component: Welcome, canActivate: [RouteGuard]},
    {path: 'todolist', component: TodoList, canActivate: [RouteGuard]},
    {path: 'logout', component: Logout, canActivate: [RouteGuard]},
    {path: '**', component:Error}
];


