import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Company } from "../model/company.model";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class CompanyApiService {

    private httpClient = inject(HttpClient);
    private baseUrl = `${environment.baseUrl}/api/companies`;

    getCompanies(): Observable<Company[]> {
        return this.httpClient.get<Company[]>(this.baseUrl);
    }

}