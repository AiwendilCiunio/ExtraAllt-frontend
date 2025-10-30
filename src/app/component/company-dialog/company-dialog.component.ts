import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Company } from '../../model/company.model';
import { FormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Holding } from '../../model/holding.model';
import { HoldingService } from '../../service/holding.service';
import { HoldingCreateDTO } from '../../api/holding-api.service';
import { PaymentApiService } from '../../api/payment-api.service';



@Component({
  selector: 'app-company-dialog',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  templateUrl: './company-dialog.html',
  styleUrl: './company-dialog.css',
})
export class CompanyDialogComponent {

  private holdingService = inject(HoldingService);
  private paymentApiService = inject(PaymentApiService);

  company: Company = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<CompanyDialogComponent>);

  quantity = 1;

  buy() {
    console.log('buying', this.quantity, 'shares of', this.company.name);

    // TODO - test after deploying
    // const paymentRequest = { amount: this.quantity * this.company.pricePerShare, description: this.company.name };
    // this.paymentApiService.checkout(paymentRequest);

    const newHolding: HoldingCreateDTO = {
      companyName: this.company.name,
      quantity: this.quantity,
      pricePerShare: this.company.pricePerShare
    }

    this.holdingService.buyShares(newHolding);
    console.log("calling holding service with", newHolding);
    this.dialogRef.close();
  }
}
