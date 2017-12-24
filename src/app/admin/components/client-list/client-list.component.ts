import { Component, OnInit } from '@angular/core';
import { Client } from '../../../shared/models/app.models';
import { ClientService } from '../../../shared/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  loading: boolean;
  clients: Client[];

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.refreshData();
  }

  async refreshData() {
    this.loading = true;
    this.clients = await this.clientService.getClients().toPromise();
    this.loading = false;
    console.log("Clients", this.clients);
  }

  onRowSelect(client: Client) {
    console.log(client);
  }

  openClient(client: Client) {
    this.router.navigate(['/clients', client.clientRef]);
  }

}
