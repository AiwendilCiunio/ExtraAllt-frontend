import { Component, inject } from '@angular/core';
import { HoldingService } from '../../service/holding.service';

@Component({
  selector: 'app-holding-list',
  standalone: true,
  imports: [],
  templateUrl: './holding-list.html',
  styleUrl: './holding-list.css',
})
export class HoldingListComponent {

  private holdingService = inject(HoldingService);

  holdings = this.holdingService.holdings;

}
