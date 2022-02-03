import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private apiService: ApiService) { }

  getClient(){
    return this.apiService.getRequest('api/v1/client/1', null);
  }
}
