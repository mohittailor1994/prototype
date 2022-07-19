import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef, MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { ToastService } from 'ng-uikit-pro-standard';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  snackBarConfig: MatSnackBarConfig;
  snackBarRef: MatSnackBarRef<any>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  snackBarAutoHide = '1500';

  constructor(private matSnackBar: MatSnackBar,
              private toastrService: ToastService) { }

  ShowSnackBar(message: string, title: string) {
    this.matSnackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  showSuccess(message: string, title: string) {
    this.matSnackBar.open(message, title, {
      duration: 3000,
      panelClass: 'success-snackbar',
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  showError(message: string, title: string) {
    this.matSnackBar.open(message, 'Error', {
      duration: 3000,
      panelClass: 'Error-snackbar',
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  showInfo(message: string, title: string) {
    this.matSnackBar.open(message, title, {
      duration: 3000,
      panelClass: 'Info-snackbar',
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  showWarning(message: string, title: string) {
    this.matSnackBar.open(message, title, {
      duration: 3000,
      panelClass: 'Warning-snackbar',
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
