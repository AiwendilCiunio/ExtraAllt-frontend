import { Component, input } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-tile',
  imports: [],
  templateUrl: './company-tile.html',
  styleUrl: './company-tile.css',
})
export class CompanyTileComponent {

  company = input.required<Company>();

}
