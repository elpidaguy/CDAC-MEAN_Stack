import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName = "";
  lastName = "";
  username = "";
  password = "";
  _isSubmitted=false;
  students = [];

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  public onRegister()
  {
    var obj = {
      "username":this.username,
      "password": this.password,
      "firstName":this.firstName,
      "lastName":this.lastName
    }
    this.students = this._authService.doRegister(obj);

      if(this.students)
      {
        this._isSubmitted = true;
      }
      else
      {
        this._isSubmitted = false;
      }

  }

}
