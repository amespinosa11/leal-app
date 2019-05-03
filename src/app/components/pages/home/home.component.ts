import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../../services/transactions/transactions.service';
import { AuthService } from '../../../services/auth/auth.service';
import { DialogOverviewDialogComponent } from '../dialog-overview-dialog/dialog-overview-dialog.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transactions: any[] = [];

  apiError: boolean;

  constructor( private transactionsServices: TransactionsService, private authService: AuthService,
               private dialog: MatDialog ) {
    this.authService.isLoggedIn();
    this.apiError = false;
  }

  ngOnInit() {
    this.getTransactions();
  }

  openDialog( transaction: any ): void {
    const dialogRef = this.dialog.open(DialogOverviewDialogComponent, {
      width: '250px',
      data: transaction
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  getTransactions(): void {
    this.transactionsServices.getTransactions('', '')
    .subscribe( data => {
      this.apiError = false;
      console.log(data);
      this.transactions = data;
    }, error => {
      this.apiError = true;
    });
  }

}
