import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-regiter-form',
  templateUrl: './regiter-form.component.html',
  styleUrl: './regiter-form.component.css'
})
export class RegiterFormComponent {
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  adresseCtrl : FormControl;
  userForm: FormGroup;
  constructor(fb: FormBuilder) {
     this.usernameCtrl = fb.control("",[Validators.required, Validators.minLength(5)]);
     this.passwordCtrl = fb.control("",[Validators.required, Validators.minLength(5)]);
     this.adresseCtrl = fb.control("");
     this.userForm = fb.group({
        username: this.usernameCtrl,
        password: this.passwordCtrl,
        adresse : this.adresseCtrl
    });
  }
  reset(): void {
     this.usernameCtrl.setValue("");
     this.passwordCtrl.setValue("");
  }
  register(): void {
     console.log(this.userForm.value);
  }

}
