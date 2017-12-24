import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../shared/services/client.service';
import { Client } from '../../../shared/models/app.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client: Client;
  clientRef: string;
  loading: boolean;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {
    this.clientRef = this.route.snapshot.params['clientRef'];
  }

  async ngOnInit() {
    await this.refreshData();
  }

  async refreshData() {
    this.loading = true;
    this.client = await this.clientService.getClient(this.clientRef).toPromise();
    this.loading = false;
    console.log("Client", this.client);
  }

}
