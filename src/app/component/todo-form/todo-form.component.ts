import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
todo : string = ''

todoList: string[] = [];

constructor (public todoService: TodoService){}

ngOnInit(): void {
    // Récupération de la liste de Todo dans le service (bdd)
    this.todoList = this.todoService.getData();
}

ajouterTodo() {
    // Ajoute à la liste de ton component
    this.todoList.push(this.todo);

    // Ajoute dans le service (la bdd)
    this.todoService.addTodo();

    // Reset Todo component
    this.todo = '';
}
}


// export class TodoFormComponent implements OnInit {



//   constructor(public todo: TodoService) { }

//   ngOnInit(): void {
//      this.todo.getData()
     

//   }

// }
