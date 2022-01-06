import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() label:string='Responsable'
  @Input() firstOptionLabel:string=''
  @Input() user:string = ''
  @Output() userChange = new EventEmitter();

  constructor(public todoService: TodoService, public security:AuthService) { }


  ngOnInit(): void {
  }

  onUserSelect():void{
    this.userChange.emit(this.user)
  }

}
