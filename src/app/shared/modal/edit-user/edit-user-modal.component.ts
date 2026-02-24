import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
}

@Component({
  selector: 'app-edit-user-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
],
  templateUrl: './edit-user-modal.component.html',
  styleUrls: [`./edit-user-modal.component.scss`]
})
export class EditUserModalComponent implements OnInit {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<EditUserModalComponent>);
  private data = inject(MAT_DIALOG_DATA) as User;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.data.name, [Validators.required]],
      email: [this.data.email, [Validators.required, Validators.email]],
      role: [this.data.role, [Validators.required]],
      status: [this.data.status, [Validators.required]],
      joinDate: [this.data.joinDate, [Validators.required]]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.form.valid) {
      const updatedUser: User = {
        id: this.data.id,
        ...this.form.value
      };
      this.dialogRef.close(updatedUser);
    }
  }
}
