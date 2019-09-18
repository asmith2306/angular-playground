import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatTableModule, MatIconModule,
  MatDatepickerModule, MatNativeDateModule, MatCardModule, MatInputModule,
  MatTooltipModule, MatSnackBarModule, MatSelectModule, MatToolbarModule,
  MatButtonToggleModule, MatTabsModule, MatMenuModule, MatDividerModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatIconModule,
    MatDatepickerModule, MatNativeDateModule, MatCardModule, MatInputModule,
    MatTooltipModule, MatSnackBarModule, MatSelectModule, MatToolbarModule,
    MatButtonToggleModule, MatTabsModule, MatMenuModule, MatDividerModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatIconModule,
    MatDatepickerModule, MatNativeDateModule, MatCardModule, MatInputModule,
    MatTooltipModule, MatSnackBarModule, MatSelectModule, MatToolbarModule,
    MatButtonToggleModule, MatTabsModule, MatMenuModule, MatDividerModule]
})
export class CustomMaterialModule {
}
