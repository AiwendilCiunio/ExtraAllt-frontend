import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Company } from "../model/company.model";

@Injectable({ providedIn: 'root' })
export class CompanyApiService {

    private httpClient = inject(HttpClient);
    private baseUrl = 'http://localhost:8080/api/companies';

    getCompanies(): Observable<Company[]> {
        return this.httpClient.get<Company[]>(this.baseUrl);
    }

}