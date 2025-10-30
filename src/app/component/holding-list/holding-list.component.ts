import { Component, inject, output } from '@angular/core';
import { HoldingService } from '../../service/holding.service';
import { HoldingTileComponent } from '../holding-tile/holding-tile.component';

@Component({
  selector: 'app-holding-list',
  standalone: true,
  imports: [HoldingTileComponent],
  templateUrl: './holding-list.html',
  styleUrl: './holding-list.css',
})
export class HoldingListComponent {

  private holdingService = inject(HoldingService);

  holdings = this.holdingService.holdings;

}
