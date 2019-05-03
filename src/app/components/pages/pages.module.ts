import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../material';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogOverviewDialogComponent } from './dialog-overview-dialog/dialog-overview-dialog.component';

@NgModule({
  declarations: [ HomeComponent, NavbarComponent, DialogOverviewDialogComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [ HomeComponent, DialogOverviewDialogComponent ],
  entryComponents: [DialogOverviewDialogComponent],
})
export class PagesModule { }
