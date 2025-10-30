import { inject, Injectable, signal } from "@angular/core";
import { HoldingApiService, HoldingCreateDTO, HoldingUpdateDTO } from "../api/holding-api.service";
import { Holding } from "../model/holding.model";



@Injectable({ providedIn: 'root' })
export class HoldingService {

    private holdingApiService = inject(HoldingApiService);

    holdings = signal<Holding[]>([]);

    getAllHoldings(): void {
        this.holdingApiService.getAllHoldings().subscribe({
            next: (data) => {
                this.holdings.set(data ?? []),
                    console.log('received holdings', data)
            },
            error: error => console.error('error fetching holdings', error)
        });
    }


    buyShares(dto: HoldingCreateDTO) {
        console.log("received holding", dto);
        const currentHoldings = this.holdings() ?? [];
        const holding = currentHoldings.find(h => h.company.name === dto.companyName);

        if (!holding) {
            this.holdingApiService.createHolding(dto).subscribe({
                next: (data) => this.holdings.update(holdings => [...(holdings ?? []), data]),
                error: error => console.error('Error creating holding', error)
            });
        } else {
            const updateDTO: HoldingUpdateDTO = {
                id: holding.id,
                pricePerShare: dto.pricePerShare,
                quantity: dto.quantity
            };
            this.holdingApiService.updateHolding(updateDTO).subscribe({
                next: (data) => this.holdings.update(list => list.map(h => (h.id === data.id ? data : h))),
                error: error => console.error('Error updating holding', error)
            });
        }

    }



}