import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountOperationsComponent } from './components/account-operations/account-operations.component';
import { ToasterComponent } from './components/shared/toaster/toaster.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountsListComponent,
    AccountOperationsComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
