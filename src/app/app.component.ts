import { Component } from '@angular/core';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserTableComponent } from './components/user-table/user-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserFormComponent, UserTableComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
