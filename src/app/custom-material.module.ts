import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatTableModule, MatIconModule,
  MatDatepickerModule, MatNativeDateModule, MatCardModule, MatInputModule,
  MatTooltipModule, MatSnackBarModule, MatSelectModule, MatToolbarModule,
  MatButtonToggleModule, MatTabsModule, MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatIconModule,
    MatDatepickerModule, MatNativeDateModule, MatCardModule, MatInputModule,
    MatTooltipModule, MatSnackBarModule, MatSelectModule, MatToolbarModule,
    MatButtonToggleModule, MatTabsModule, MatMenuModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatIconModule,
    MatDatepickerModule, MatNativeDateModule, MatCardModule, MatInputModule,
    MatTooltipModule, MatSnackBarModule, MatSelectModule, MatToolbarModule,
    MatButtonToggleModule, MatTabsModule, MatMenuModule]
})
export class CustomMaterialModule {
}
