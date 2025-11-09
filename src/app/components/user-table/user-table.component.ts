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
  sortField: keyof User = 'name';
  sortAsc = true;

  constructor(private userService: UserService) {
    this.userService.users$.subscribe((users) => (this.users = users));
  }

  get filteredUsers(): User[] {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  sortUsers() {
    this.users.sort((a, b) => {
      const valueA = a[this.sortField];
      const valueB = b[this.sortField];

      // pour les nombres
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.sortAsc ? valueA - valueB : valueB - valueA;
      }

      // pour les chaînes
      return this.sortAsc
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));
    });
  }

  toggleSort(field: keyof User) {
    if (this.sortField === field) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortField = field;
      this.sortAsc = true;
    }
    this.sortUsers();
  }
}
