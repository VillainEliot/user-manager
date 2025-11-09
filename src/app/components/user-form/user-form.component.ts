import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  name = '';
  email = '';
  role = '';

  constructor(private userService: UserService) {}

  addUser() {
    if (!this.name || !this.email || !this.role) return;

    this.userService
      .addUser({ name: this.name, email: this.email, role: this.role })
      .subscribe(() => {
        this.name = '';
        this.email = '';
        this.role = '';
      });
  }
}
