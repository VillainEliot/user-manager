import { Component } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-table.component.html',
})
export class UserTableComponent {
  users: User[] = [];
  filterText = '';

  constructor(private userService: UserService) {
    this.userService.users$.subscribe((users) => (this.users = users));
  }

  get filteredUsers(): User[] {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
