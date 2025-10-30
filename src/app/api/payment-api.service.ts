import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { firstValueFrom } from 'rxjs';

export interface PaymentRequest {
    amount: number;
    description: string;
}

interface CheckoutSessionResponse {
    sessionId: string;
}

@Injectable({ providedIn: 'root' })
export class PaymentApiService {

    private httpClient = inject(HttpClient);
    private baseUrl = 'http://localhost:8080/api/payments';
    private stripePromise: Promise<Stripe | null> = loadStripe(
        'pk_test_51QzCiuEPswyT3q8Mi1sRJhxYD1wjikNJojC8Tc6Zg94s9mkMor8MBlxcQDtbKFA6qqPuo5AAfcNPmHJo5oYBriY300a3GeceR1'
    );

    async checkout(request: PaymentRequest) {
        try {
            const response = await firstValueFrom(
                this.httpClient.post<CheckoutSessionResponse>(`${this.baseUrl}/checkout`, request)
            );

            const sessionId = response.sessionId;
            const stripe = await this.stripePromise;
            if (!stripe) throw new Error('Stripe failed to load');

            const { error } = await stripe.redirectToCheckout({ sessionId });
            if (error) throw error;

        } catch (error) {
            console.error('Error checking out:', error);
        }
    }
}