import { inject, Injectable, signal } from "@angular/core";
import { MessageApiService } from "../api/message-api.service";
import { EventMessage } from "../model/event-message.model";
import { Client } from "@stomp/stompjs";

@Injectable({ providedIn: 'root' })
export class MessageService {

    messages = signal<EventMessage[]>([]);
    private client: Client;

    constructor() {
        this.client = new Client({
            brokerURL: 'ws://localhost:8080/ws',
            reconnectDelay: 5000
        });
        this.client.onConnect = () => {
            console.log('connected to Websocket Broker');
            this.client.subscribe('/topic/market/messages', message => {
                const events: EventMessage[] = JSON.parse(message.body);
                // console.log('Messages update received', events);
                this.messages.update(current => [...events, ...current]);
            });
        };

        this.client.activate();
    }

}