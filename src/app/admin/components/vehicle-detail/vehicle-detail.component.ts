import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../shared/services/vehicle.service';
import { Vehicle, Client } from '../../../shared/models/app.models';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../shared/services/client.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  vehicle: Vehicle;
  watchingClients: Client[];
  registration: string;
  loading: boolean;

  constructor(
    private vehicleService: VehicleService,
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {
    this.registration = this.route.snapshot.params['registration'];
  }

  async ngOnInit() {
    await this.refreshData();
  }

  async refreshData() {
    this.loading = true;
    this.vehicle = await this.vehicleService.getVehicle(this.registration).toPromise();
    this.watchingClients = await this.clientService.getClientsWatchingVehicle(this.registration).toPromise();
    this.loading = false;
    console.log("vehicle", this.vehicle);
    console.log("watching clients", this.watchingClients);
  }

}
