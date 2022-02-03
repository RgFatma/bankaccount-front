import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction';
import { AccountBalance} from 'src/app/models/account-balance';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private apiService: ApiService) { }

  depositAmount(transaction: Transaction): Observable<AccountBalance>{
    return this.apiService.postRequest('api/v1/account/deposit', transaction,  null);
  }

  retreiveAmount(transaction: Transaction): Observable<AccountBalance>{
    return this.apiService.postRequest('api/v1/account/retreive', transaction, null);
  }
}
