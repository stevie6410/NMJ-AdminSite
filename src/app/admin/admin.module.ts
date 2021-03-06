import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { DataTableModule, ButtonModule, CheckboxModule, TabViewModule } from 'primeng/primeng';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DataTableModule,
    ButtonModule,
    CheckboxModule,
    TabViewModule
  ],
  exports: [
    VehicleListComponent
  ],
  declarations: [
    VehicleListComponent,
    ClientListComponent,
    ClientDetailComponent,
    VehicleDetailComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
