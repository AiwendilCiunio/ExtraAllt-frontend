import { Component, inject } from '@angular/core';
import { CompanyListComponent } from '../../component/company-list/company-list.component';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CompanyListComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {

  private companyService = inject(CompanyService);

  ngOnInit(): void {
    this.companyService.getCompanies();
  }

}
