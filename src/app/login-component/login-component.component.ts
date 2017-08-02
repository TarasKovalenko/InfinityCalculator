import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent {

  private password:string = 'benny!@#';

  constructor(private router: Router) {}

  login(password: string) {
    if (password == this.password) {
      localStorage.setItem('infinityToken', password);
      this.router.navigate(['calc']);
    } else {
      alert('Incorrect password!');
    }
  }

}
