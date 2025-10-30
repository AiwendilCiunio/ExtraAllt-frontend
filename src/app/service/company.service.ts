import { inject, Inject, Injectable, signal } from "@angular/core";
import { CompanyApiService } from "../api/company-api.service";
import { Company } from "../model/company.model";
import { Client } from '@stomp/stompjs';
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class CompanyService {

    private companyApiService = inject(CompanyApiService);
    companies = signal<Company[]>([]);

    private client: Client;
    private brokerUrl = `${environment.brokerUrl}`;

    constructor() {
        this.client = new Client({
            brokerURL: this.brokerUrl,
            reconnectDelay: 5000
        });
        this.client.onConnect = () => {
            console.log('connected to Websocket Broker');
            this.client.subscribe('/topic/market/changes', message => {
                const updated: Company[] = JSON.parse(message.body);
                // console.log('Update received', updated);
                this.companies.update(current => {
                    const updateMap = new Map(updated.map(c => [c.id, c]));
                    return current.map(c => updateMap.get(c.id) ?? c);
                })
            });
        }
        this.client.activate();
    }

    getCompanies(): void {
        this.companyApiService.getCompanies().subscribe({
            next: (data) => this.companies.set(data),
            error: error => console.error('Error fetching companies', error)
        });
    }

}