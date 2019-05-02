import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../../services/transactions/transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transactions: any[] = [];

  apiError: boolean;

  constructor( private transactionsServices: TransactionsService ) {
    this.apiError = false;
  }

  ngOnInit() {
    this.getTransactions();
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
