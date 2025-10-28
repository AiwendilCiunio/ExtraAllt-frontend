import { Component, inject } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventListComponent {

  private messageService = inject(MessageService);

  messages = this.messageService.messages;

  ngOnInit() {

  }

}
