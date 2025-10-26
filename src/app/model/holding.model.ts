import { Company } from "./company.model";

export interface Holding {
    id: number;
    quantity: number;
    averagePrice: number;
    lastUpdated: string;
    company: Company;
}