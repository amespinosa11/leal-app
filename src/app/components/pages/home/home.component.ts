import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../../services/transactions/transactions.service';
import { AuthService } from '../../../services/auth/auth.service';
import { DialogOverviewDialogComponent } from '../dialog-overview-dialog/dialog-overview-dialog.component';
import { MatDialog, MatSelectChange } from '@angular/material';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transactions: any[] = [];

  apiError: boolean;

  types = new FormControl();
  typeList: string[] = ['Earn', 'Redeem'];

  date = new FormControl();

  selectedTypes: string[] = [];

  searchValues: string[] = [];

  startDate: any = '';

  endDate: any = '';

  dateError: boolean;

  constructor( private transactionsServices: TransactionsService, private authService: AuthService,
               private dialog: MatDialog ) {
    this.authService.isLoggedIn();
    this.apiError = false;
    this.dateError = false;
  }

  ngOnInit() {
    this.getTransactions('', '');
  }

  openDialog( transaction: any ): void {
    const dialogRef = this.dialog.open(DialogOverviewDialogComponent, {
      width: '250px',
      data: transaction
    });

    dialogRef.afterClosed().subscribe( result => {});
  }

  getTransactions( startDate: any, endDate: any ): void {
    this.transactionsServices.getTransactions(startDate, endDate)
    .subscribe( data => {
      this.apiError = false;
      this.transactions = data;
    }, error => {
      this.apiError = true;
    });
  }

  selectType(event: MatSelectChange) {
    this.selectedTypes = event.value;
  }

  setStartDate(event: any) {
    this.startDate = this.formatDate(event.value);
  }

  setEndDate(event: any) {
    this.endDate = this.formatDate(event.value);
  }

  formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) { month = '0' + month; }
    if (day.length < 2) { day = '0' + day; }

    return [year, month, day].join('-');
  }

  filter(): void {
    const fdate = new Date(this.startDate);
    const tdate = new Date(this.endDate);

    if (fdate.valueOf() > tdate.valueOf()) {
      this.dateError = true;
    } else {
      this.dateError = false;
      setTimeout( () => {
        this.searchValues = this.selectedTypes;
        this.getTransactions(this.startDate, this.endDate);
      }, 500);
    }
  }

}
