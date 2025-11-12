import { Component } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  name: string = '';
  email: string = '';
  role: 'user' | 'admin' | '' = '';

  constructor(private userService: UserService) {}

  addUser() {
    if (!this.name || !this.email || !this.role) {
      alert('Tous les champs sont obligatoires');
      return;
    }

    this.userService.addUser({ name: this.name, email: this.email, role: this.role })
      .subscribe({
        next: user => {
          document.dispatchEvent(new CustomEvent('userAdded', { detail: user }));

          this.name = '';
          this.email = '';
          this.role = '';
        },
        error: err => {
          console.error('Erreur ajout utilisateur:', err);
        }
      });
  }
}
