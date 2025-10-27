import { Component, inject } from '@angular/core';
import { CompanyService } from '../../service/company.service';
import { CompanyTileComponent } from '../company-tile/company-tile.component';
import { CompanyDialogComponent } from '../company-dialog/company-dialog.component';
import { Company } from '../../model/company.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CompanyTileComponent],
  templateUrl: './company-list.html',
  styleUrl: './company-list.css',
})
export class CompanyListComponent {

  private dialog = inject(MatDialog);
  private companyService = inject(CompanyService);
  companies = this.companyService.companies;

  openDialog(company: Company) {
    this.dialog.open(CompanyDialogComponent, {
      data: company,
      width: '400px',
      height: '400px'
    });
  }

}
