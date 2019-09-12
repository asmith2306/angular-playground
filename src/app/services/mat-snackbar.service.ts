import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MatSnackBarService {

  constructor(private matSnackBar: MatSnackBar) {
  }

  open(message: string, duration = 2000) {
    this.matSnackBar.open(message, null, {duration});
  }
}
