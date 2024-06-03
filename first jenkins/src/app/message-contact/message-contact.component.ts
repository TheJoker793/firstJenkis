import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-contact',
  templateUrl: './message-contact.component.html',
  styleUrl: './message-contact.component.css'
})
export class MessageContactComponent {
  @Input() messageFils:string="";
  @Output() eventToSend = new EventEmitter();

  addContact(contactForm:any){
    alert(contactForm.nom+" "+contactForm.prenom+" "+contactForm.email+" "+contactForm.message);
  }

  sendEvent() {
    this.eventToSend.emit(new Date());
  }
}
