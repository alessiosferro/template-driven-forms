import {NgModule} from '@angular/core';
import {DashboardPersonaleComponent} from './containers/dashboard-personale/dashboard-personale.component';
import {CommonModule} from '@angular/common';
import {PersonaleRoutingModule} from './personale-routing.module';
import {FormPersonaleComponent} from './components/form-personale/form-personale.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DashboardPersonaleComponent,
    FormPersonaleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonaleRoutingModule
  ]
})
export class PersonaleModule {}
