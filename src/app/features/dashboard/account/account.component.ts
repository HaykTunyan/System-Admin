import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  private fb = inject(FormBuilder);

  form!: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  name: string = 'Hayk';
  avatarUrl = this.getDefaultAvatar();

  statusOptions = ['Active', 'Inactive', 'Suspended'];
  permissions = [
    { id: 'read', label: 'Read Access' },
    { id: 'write', label: 'Write Access' },
    { id: 'admin', label: 'Admin Access' },
    { id: 'delete', label: 'Delete Access' }
  ];

  paymentSystems = ['Credit Card', 'PayPal', 'Bank Transfer', 'Crypto'];

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['John', Validators.required],
      lastName: ['Doe', Validators.required],
      email: ['john.doe@example.com', [Validators.required, Validators.email]],
      birthday: ['1990-01-15', Validators.required],
      status: ['Active', Validators.required],
      permissions: [['read', 'write'], Validators.required],
      paymentSystem: ['Credit Card', Validators.required],
      avatar: [this.avatarUrl]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      this.loading = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Account updated:', this.form.value);
        this.loading = false;
        this.submitted = false;
      }, 2000);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onAvatarChange(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.avatarUrl = e.target?.result as string;
        this.form.patchValue({ avatar: this.avatarUrl });
      };
      reader.readAsDataURL(file);
    }
  }

  onPermissionToggle(permissionId: string, isChecked: boolean) {
    const permissions = this.form.get('permissions')?.value || [];
    if (isChecked) {
      this.form.get('permissions')?.setValue([...permissions, permissionId]);
    } else {
      this.form.get('permissions')?.setValue(permissions.filter((p: any) => p !== permissionId));
    }
  }

  getPermissionLabel(id: string): string {
    return this.permissions.find(p => p.id === id)?.label || id;
  }

  private getDefaultAvatar(): string {
    return 'https://ui-avatars.com/api/?name=Default+User&background=667eea&color=fff&size=120';
  }
}
