import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardPersonaleComponent} from './containers/dashboard-personale/dashboard-personale.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: DashboardPersonaleComponent }])],
  exports: [RouterModule]
})
export class PersonaleRoutingModule {}
