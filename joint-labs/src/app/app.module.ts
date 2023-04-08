import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredEComponent } from './apps/cred-e/cred-e.component';
import { InfraDAOComponent } from './apps/infra-dao/infra-dao.component';
import { ZkPayrollComponent } from './apps/zk-payroll/zk-payroll.component';
import { RapidOracleComponent } from './apps/rapid-oracle/rapid-oracle.component';
import { CooperDBComponent } from './apps/cooper-db/cooper-db.component';

@NgModule({
  declarations: [
    AppComponent,
    CredEComponent,
    InfraDAOComponent,
    ZkPayrollComponent,
    RapidOracleComponent,
    CooperDBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
