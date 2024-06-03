import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  invalidLogin = false;

  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  /*checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate([''])
    } else
      this.invalidLogin = true
  }*/
  checkLogin() {

    this.loginservice.authenticate(this.username, this.password).subscribe(
      (data:any) => {
        this.router.navigate([''])
        this.invalidLogin = false
        console.log(data)
      },
      (error:any) => {
        this.invalidLogin = true
        console.log(error)
      }
    );
  }

}
