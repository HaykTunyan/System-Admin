import { Injectable, inject, Type } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private dialog = inject(MatDialog);

  open<T, D = any>(component: Type<T>, data?: D, width = '600px') {
    return this.dialog.open(component as any, {
      width,
      data,
      autoFocus: false,
      restoreFocus: true,
    });
  }

  closeAll() {
    this.dialog.closeAll();
  }
}
