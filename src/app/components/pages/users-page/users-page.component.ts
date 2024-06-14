import { UserService } from './../../../services/user.service';

import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';



@Component({
  selector: 'app-users',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
