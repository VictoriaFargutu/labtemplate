import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.css'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  msgs: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  showInfo() {
    alert("Thanks for contacting us!");
    }


}
