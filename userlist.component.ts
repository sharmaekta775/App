import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList: User[] = [];
    first = 0;
    rows = 10;
    constructor(private userService: UserService) {}


  ngOnInit(): void {
    this.userList = this.userService.getUsers();
  }

  next() {
      this.first = this.first + this.rows;
  }
  prev() {
      this.first = this.first - this.rows;
  }
  reset() {
      this.first = 0;
  }
  isLastPage(): boolean {
      return this.userList ? this.first === (this.userList.length - this.rows) : true;
  }
  isFirstPage(): boolean {
      return this.userList ? this.first === 0 : true;
  }
  remove(id: number) {
      this.userService.removeUser(id);
      this.userList = this.userService.getUsers();
  }
}

