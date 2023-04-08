import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'apps/CredE',
    loadChildren: () => import('./apps/cred-e/cred-e.module').then(m => m.CredEModule)
  },
  {
    path: 'apps/CooperDB',
    loadChildren: () => import('./apps/cooper-db/cooper-db.module').then(m => m.CooperDBModule)
  },
  {
    path: 'apps/InfraDAO',
    loadChildren: () => import('./apps/infra-dao/infra-dao.module').then(m => m.InfraDAOModule)
  },
  {
    path: 'apps/RapidOracle',
    loadChildren: () => import('./apps/rapid-oracle/rapid-oracle.module').then(m => m.RapidOracleModule)
  },
  {
    path: 'apps/Stealthy',
    loadChildren: () => import('./apps/stealthy/stealthy.module').then(m => m.StealthyModule)
  },
  {
    path: 'apps/Unchained',
    loadChildren: () => import('./apps/unchained/unchained.module').then(m => m.UnchainedModule)
  },
  {
    path: 'apps/zkPayroll',
    loadChildren: () => import('./apps/zk-payroll/zk-payroll.module').then(m => m.ZkPayrollModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
