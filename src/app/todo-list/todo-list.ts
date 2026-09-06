import { Component, OnInit } from '@angular/core';
import { NgFor, NgForOf ,NgIf, UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  imports: [NgFor, NgForOf, UpperCasePipe, DatePipe],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList implements OnInit{

  todos = [
    new Todo( 1, 'Lear java', new Date(),false),
    new Todo(2,'Lear Spring', new Date(),false),
    new Todo(3,'Lear Spring Boot',new Date(),false),
    new Todo(4,'Lear Angular', new Date(),false)
  ];
  ngOnInit(): void {
    
  }
}


export class Todo {
  constructor(public id:number,
    public desc: string,
    public targetDate: Date,
    public done: boolean
  ){

  }
}