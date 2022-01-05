export interface TodoInterface {
    todoName: string;
    todoState: boolean;
  }

export class Todo implements TodoInterface {
    todoName: string = '';
    todoState: boolean = false;

    constructor (task: TodoInterface| null=null){
        if (task) {
            this.todoName = task.todoName;
            this.todoState = true;
          }
    }
     
}

