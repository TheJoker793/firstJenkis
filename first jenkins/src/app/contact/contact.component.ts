import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  ourCampany : string = "Smart IT Partner";
  messageParent : string = "Tous les champs sont obligatoires!";

  processEvent(message :any) {

    alert("Message du fils est : " + message);
  }

  processEvent2(message :any) {

    alert("Nous somme le : " + message);
  }

}
