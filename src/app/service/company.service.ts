import { inject, Inject, Injectable, signal } from "@angular/core";
import { CompanyApiService } from "../api/company-api.service";
import { Company } from "../model/company.model";

@Injectable({ providedIn: 'root' })
export class CompanyService {

    private companyApiService = inject(CompanyApiService);
    companies = signal<Company[]>([]);

    getCompanies() {
        this.companyApiService.getCompanies().subscribe({
            next: (data) => this.companies.set(data),
            error: error => console.error('Error fetching companies', error)
        });
    }

}