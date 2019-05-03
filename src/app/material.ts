import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule,
        MatListModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
      imports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatDialogModule
      ],
      exports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatDialogModule
      ]
})
export class MaterialModule { }
