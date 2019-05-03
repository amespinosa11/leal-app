import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  input: LoginCredentials;

  constructor( private authService: AuthService, private router: Router ) {
    this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.input = {
      email: '',
      password: ''
    };
  }

  login() {
    this.authService.login(this.input)
    .subscribe( (response: any) => {
      sessionStorage.setItem('token', response.token);
      sessionStorage.setItem('user', JSON.stringify(response.user));
      this.router.navigate(['/home']);
    },
    (error: any) => {
      console.log('An error has ocurred' + error);
    });
  }

}
