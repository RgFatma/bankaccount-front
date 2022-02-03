import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { OperationService } from 'src/app/services/operarion/operation.service';
import { AccountService } from 'src/app/services/account/account.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.css']
})
export class AccountOperationsComponent implements OnInit, OnDestroy {
  operations!: any[];
  transaction = new Transaction();
  typeTransaction = 'DEBIT';
  transType = 'all';
  numberAccount!: String;
  errorMessage = '';
  Alloperations: any[] = [];
  depositAmountSubscription!: Subscription;
  retreiveAmountSubsription!: Subscription;
  getOperationsSubscription!: Subscription;

  constructor(private operationService: OperationService, private accountService: AccountService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.numberAccount = params.get('account_number')!;
      if (this.numberAccount) {
        this.getOperationsByAccountNumber(this.numberAccount);
      }
    });
  }

  getOperationsByAccountNumber(accountNumber: String): void {

    this.getOperationsSubscription = this.operationService.getOperations(accountNumber).subscribe(data => {
      this.operations = data;
      this.Alloperations = data;
    }, error => {

    }
    );
  }

  saveTransaction(): void {
    this.errorMessage = '';
    if (this.typeTransaction == 'DEBIT') {
      this.transaction.accountNumber = this.numberAccount;
      this.depositAmountSubscription = this.accountService.depositAmount(this.transaction).subscribe(data => {
        this.getOperationsByAccountNumber(this.numberAccount);
        this.transaction = new Transaction();
      }, error => {
        this.errorMessage = 'An error occurred during the transaction.';
      });
    } else {
      this.transaction.accountNumber = this.numberAccount;
      this.retreiveAmountSubsription = this.accountService.retreiveAmount(this.transaction).subscribe(data => {
        this.getOperationsByAccountNumber(this.numberAccount);
        this.transaction = new Transaction();
      }, error => {
        if (error.status === 400) {
          this.errorMessage = error.error.description;
        } else {
          this.errorMessage = 'An error occurred during the transaction.';
        }
      });
    }
  }
  filter(event: any): void {
    switch (event) {
      case 'debit': this.operations = this.Alloperations.filter(data => data.operationName === 'Debit');
        break;
      case 'credit': this.operations = this.Alloperations.filter(data => data.operationName === 'Credit');
        break;
      case 'all': this.operations = this.Alloperations;
        break;
      default: this.operations = this.Alloperations;
    }
  }

  ngOnDestroy(): void {
    if (this.depositAmountSubscription !== undefined) {
      this.depositAmountSubscription.unsubscribe();
    }

    if (this.retreiveAmountSubsription !== undefined) {
      this.retreiveAmountSubsription.unsubscribe();
    }

    if (this.getOperationsSubscription !== undefined) {
      this.getOperationsSubscription.unsubscribe();
    }
  }

}
