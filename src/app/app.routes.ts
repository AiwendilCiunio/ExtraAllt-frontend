import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { PaymentCancelComponent } from './pages/payment-cancel/payment-cancel.component';

export const routes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'payment-success', component: PaymentSuccessComponent },
    { path: 'payment-cancel', component: PaymentCancelComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }

];
