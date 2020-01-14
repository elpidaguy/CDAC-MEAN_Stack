import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  _isSubmitted=false;
  user;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.user = {};
  }

  public onLogin()
  {
    console.log("in on login");
    var obj = {
      "username":this.username,
      "password": this.password
    }
    this.user = this._authService.doLogin(obj);

    console.log(this.user);
      if(this.user['password'] == this.password)
      {
        this._isSubmitted = true;
      }
      else
      {
        this._isSubmitted = false;
      }

  }

}
