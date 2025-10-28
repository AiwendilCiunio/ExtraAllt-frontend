import { Component, inject } from '@angular/core';
import { HoldingService } from '../../service/holding.service';
import { HoldingListComponent } from "../../component/holding-list/holding-list.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HoldingListComponent],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class PortfolioComponent {

  private holdingService = inject(HoldingService);

  ngOnInit(): void {
    this.holdingService.getAllHoldings();
  }

}
