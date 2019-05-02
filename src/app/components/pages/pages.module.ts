import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [ HomeComponent ]
})
export class PagesModule { }
