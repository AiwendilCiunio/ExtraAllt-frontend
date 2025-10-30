import { Component, input } from '@angular/core';
import { Holding } from '../../model/holding.model';

@Component({
  selector: 'app-holding-tile',
  imports: [],
  templateUrl: './holding-tile.html',
  styleUrl: './holding-tile.css',
})
export class HoldingTileComponent {

  holding = input.required<Holding>();
  
  
}
