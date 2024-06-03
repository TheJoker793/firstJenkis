import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.authenticationService.logOut();
    this.cdr.detectChanges()
    this.router.navigate(['login']);
  }

}
