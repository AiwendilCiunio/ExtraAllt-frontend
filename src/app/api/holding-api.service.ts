import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Holding } from "../model/holding.model";

export interface HoldingCreateDTO {
    companyName: string,
    quantity: number,
    pricePerShare: number
}

@Injectable({ providedIn: 'root' })
export class HoldingApiService {

    private httpClient = inject(HttpClient);
    private baseUrl = 'http://localhost:8080/api/holdings';

    getAllHoldings(): Observable<Holding[]> {
        console.log("getting holdings...");
        return this.httpClient.get<Holding[]>(this.baseUrl);
    }

    createHolding(dto: HoldingCreateDTO): Observable<Holding> {
        console.log("creating holding...");
        return this.httpClient.post<Holding>(this.baseUrl, dto);
    }
}