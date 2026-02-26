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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-settings',
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
    MatSlideToggleModule
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {
  private fb = inject(FormBuilder);

  form!: FormGroup;
  loading = false;
  submitted = false;

  languageOptions = ['English', 'Spanish', 'French', 'German', 'Chinese'];
  timezoneOptions = ['UTC', 'EST', 'CST', 'MST', 'PST', 'GMT', 'IST'];
  dateFormatOptions = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'];

  teamColors = [
    { name: 'Default (Purple)', hex: '#667eea' },
    { name: 'Ocean (Blue)', hex: '#0891b2' },
    { name: 'Sunset (Orange)', hex: '#f97316' },
    { name: 'Forest (Green)', hex: '#10b981' },
    { name: 'Crimson (Red)', hex: '#dc2626' },
    { name: 'Indigo', hex: '#6366f1' },
    { name: 'Teal', hex: '#14b8a6' },
    { name: 'Rose', hex: '#f43f5e' }
  ];

  selectedColor = '#667eea';

  ngOnInit() {
    this.form = this.fb.group({
      language: ['English', Validators.required],
      timezone: ['UTC', Validators.required],
      dateFormat: ['MM/DD/YYYY', Validators.required],
      emailNotifications: [true],
      pushNotifications: [false],
      weeklyReport: [true],
      monthlyReport: [false],
      companyName: ['Acme Corp', Validators.required],
      companyEmail: ['company@acme.com', [Validators.required, Validators.email]],
      twoFactorAuth: [false],
      sessionTimeout: ['30', Validators.required],
      teamColor: [this.selectedColor, Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      this.loading = true;

      setTimeout(() => {
        console.log('Settings updated:', this.form.value);
        this.loading = false;
        this.submitted = false;
      }, 2000);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onColorSelect(color: string) {
    this.selectedColor = color;
    this.form.patchValue({ teamColor: color });
  }
}
