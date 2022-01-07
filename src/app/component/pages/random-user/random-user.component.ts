import { } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';




@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css'],
})
export class RandomUserComponent implements OnInit {


  constructor(public randomUser:RandomUserService) {}

  ngOnInit(): void {
    this.randomUser.loadUsers();
  }

}