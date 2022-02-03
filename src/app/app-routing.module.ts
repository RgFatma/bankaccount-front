import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOperationsComponent } from './components/account-operations/account-operations.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';

const routes: Routes = [

  { path: 'accounts', component:  AccountsListComponent},
  { path: 'account/:account_number', component:  AccountOperationsComponent},
  { path: '**', redirectTo: '/accounts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
