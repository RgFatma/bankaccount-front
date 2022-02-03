import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client/client.service';
import { Client } from 'src/app/models/client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit, OnDestroy {

  client = new Client();
  getClientSubscription!: Subscription;

  constructor(private clientService: ClientService) { }


  ngOnInit(): void {
    this.getClientSubscription = this.clientService.getClient().subscribe(data => {
      this.client = data;
    }, error => {
    }
    );
  }

  ngOnDestroy(): void {
    if (this.getClientSubscription !== undefined) {
      this.getClientSubscription.unsubscribe();
    }
  }

}
