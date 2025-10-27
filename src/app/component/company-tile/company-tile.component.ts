import { Component, input, output } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-tile',
  imports: [],
  templateUrl: './company-tile.html',
  styleUrl: './company-tile.css',
})
export class CompanyTileComponent {

  company = input.required<Company>();
  open = output<Company>();

  openDialog() {
    console.log('open dialog');
    this.open.emit(this.company());
  }

}
