import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ModalService } from '$shared/modal/modal.service';
import { EditUserModalComponent } from '$shared/modal/edit-user/edit-user-modal.component';
import { DeleteUserModalComponent } from '$shared/modal/delete-user/delete-user-modal.component';
import { UserFilterComponent } from "../../../shared/user-filter/user-filter.component";

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
}

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    UserFilterComponent
],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {
  private modalService = inject(ModalService);

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'status', 'joinDate', 'actions'];
  
  allUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinDate: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', joinDate: '2023-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', joinDate: '2023-03-10' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'Active', joinDate: '2023-04-05' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active', joinDate: '2023-05-12' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Active', joinDate: '2023-06-18' },
    { id: 7, name: 'Eve Davis', email: 'eve@example.com', role: 'Editor', status: 'Active', joinDate: '2023-07-22' },
    { id: 8, name: 'Frank Miller', email: 'frank@example.com', role: 'User', status: 'Inactive', joinDate: '2023-08-30' }
  ];

  users = this.allUsers;
  filteredUsers = this.allUsers;
  pageSize = 5;
  pageIndex = 0;
  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  get paginatedUsers(): User[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredUsers.slice(start, start + this.pageSize);
  }

  ngOnInit(): void {
    this.users = [...this.allUsers];
    this.filteredUsers = [...this.allUsers];
  }

  onFilterChange(filters: any): void {
    this.pageIndex = 0;
    
    this.filteredUsers = this.users.filter(user => {
      const searchValue = filters.searchValue?.toLowerCase() || '';
      const statusFilter = filters.status || '';
      const roleFilter = filters.role || '';

      const matchesSearch = searchValue === '' || 
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue) ||
        user.role.toLowerCase().includes(searchValue);

      const matchesStatus = statusFilter === '' || user.status === statusFilter;
      const matchesRole = roleFilter === '' || user.role === roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  onSortChange(event: Sort): void {
    if (!event.active || event.direction === '') {
      this.users = [...this.allUsers];
      this.filteredUsers = [...this.users];
      this.sortColumn = '';
      return;
    }

    this.sortColumn = event.active;
    this.sortDirection = event.direction as 'asc' | 'desc';

    this.users = [...this.allUsers].sort((a: any, b: any) => {
      const aValue = a[event.active];
      const bValue = b[event.active];

      if (aValue < bValue) {
        return event.direction === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return event.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    
    this.filteredUsers = [...this.users];
  }

  editUser(user: User): void {
    const dialogRef = this.modalService.open(EditUserModalComponent, user, '600px');
    
    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
        const index = this.allUsers.findIndex(u => u.id === result.id);
        if (index !== -1) {
          this.allUsers[index] = result;
          this.users = [...this.users];
        }
      }
    });
  }

  deleteUser(user: User): void {
    const dialogRef = this.modalService.open(DeleteUserModalComponent, user, '500px');
    
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.allUsers = this.allUsers.filter(u => u.id !== user.id);
        this.users = this.users.filter(u => u.id !== user.id);
        this.filteredUsers = this.filteredUsers.filter(u => u.id !== user.id);
        this.pageIndex = 0;
      }
    });
  }
}
