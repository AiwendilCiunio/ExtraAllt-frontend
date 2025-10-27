import { Component, inject } from '@angular/core';
import { CompanyService } from '../../service/company.service';
import { CompanyTileComponent } from '../company-tile/company-tile.component';

@Component({
  selector: 'app-company-list',
  imports: [CompanyTileComponent],
  templateUrl: './company-list.html',
  styleUrl: './company-list.css',
})
export class CompanyListComponent {

  private companyService = inject(CompanyService);
  companies = this.companyService.companies;

}
