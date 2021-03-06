import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { VehicleListComponent } from './admin/components/vehicle-list/vehicle-list.component';
import { ClientListComponent } from './admin/components/client-list/client-list.component';
import { ClientDetailComponent } from './admin/components/client-detail/client-detail.component';
import { VehicleDetailComponent } from './admin/components/vehicle-detail/vehicle-detail.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'vehicles', component: VehicleListComponent },
    { path: 'vehicles/:registration', component: VehicleDetailComponent },
    { path: 'clients', component: ClientListComponent },
    { path: 'clients/:clientRef', component: ClientDetailComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
