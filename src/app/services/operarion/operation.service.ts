import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private apiService: ApiService) { }

  getOperations(numberAccount:any){
    return this.apiService.getRequest('api/v1/account/'+numberAccount+'/operation', null);
  }
}
