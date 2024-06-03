import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent implements OnInit{

  @Input() campany:string="";
  @Output() eventToSend = new EventEmitter();

  email:string = "infos@smart-it-partner.com";
  phone:number=98787521;
  adresse:string = "Technopole el Ghazela, Tunis";

  sendEvent() {
    this.eventToSend.emit("Message du fils vers le pere");
  }


  constructor(){
    console.log("Constructeur : " + this.campany);
  }
  ngOnInit(): void {
    console.log("ngOnInit :" + this.campany);
  }
  ngOnChanges() {
    console.log("ngOnChanges :" + this.campany);
   }

}
