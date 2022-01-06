export interface TodoDTOInterface{
  id?:number;
  taskName: string;
  taskStatus: boolean;
  user:string;
}
export class Todo  {
    id:number|undefined;
    taskName: string = '';
    taskStatus: boolean=false;
    user:string='';
     
    constructor(data: TodoDTOInterface| null=null){
      if(data){
        this.taskName=data.taskName;
        this.taskStatus=data.taskStatus;
        this.id = data.id || new Date().getTime();
        this.user = data.user;
      }else{
        this.id = new Date().getTime();
      }
      
    }
}

