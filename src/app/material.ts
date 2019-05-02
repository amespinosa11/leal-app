import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, 
        MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
      imports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatListModule
      ],
      exports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatListModule
      ]
})
export class MaterialModule { }
