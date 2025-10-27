import { inject, Injectable, signal } from "@angular/core";
import { HoldingApiService, HoldingCreateDTO } from "../api/holding-api.service";
import { Holding } from "../model/holding.model";



@Injectable({ providedIn: 'root' })
export class HoldingService {

    private holdingApiService = inject(HoldingApiService);

    private holdings = signal<Holding[]>([]);

    createHolding(newHolding: HoldingCreateDTO) {
        console.log("received holding", newHolding);
        this.holdingApiService.createHolding(newHolding).subscribe({
            next: (data) => this.holdings.update(holdings => [...holdings, data]),
            error: error => console.error('Error creating holding', error)
        });
    }



}