import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  loadedData: boolean=true;
  constructor(public loginService: AuthenticationService, private router: Router,
  ) { }

  /*ngAfterContentChecked() {
    //this.loadedData = false;
  }*/

 /* ngAfterContentInit() {
    this.loadedData = false;
}*/

logout(){
  this.loginService.logOut()
  this.router.navigate(['login']);
}
}
