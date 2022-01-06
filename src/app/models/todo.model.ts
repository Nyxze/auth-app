export interface TodoDTOInterface{
  id?:number;
  taskName: string;
  taskStatus: boolean;
}
export class Todo  {
    id:number|undefined;
    taskName: string = '';
    taskStatus: boolean=false;
     
    constructor(data: TodoDTOInterface| null=null){
      if(data){
        this.taskName=data.taskName;
        this.taskStatus=data.taskStatus;
        this.id = data.id || new Date().getTime();
      }else{
        this.id = new Date().getTime();
      }
      
    }
}

