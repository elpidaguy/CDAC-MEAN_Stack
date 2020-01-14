import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  students = [
    {'username':'elpidaguy', 'password':'password', 'firstName':'kaustubh', 'lastName':'joshi'},
    {'username':'john', 'password':'abcd', 'firstName':'Jason', 'lastName':'Stark'},
  ];

  constructor(private httpclient: HttpClient) { }

  doLogin(data:any)
  {

    var stud = {};
    this.students.forEach((x) => {
      if(x['username'] == data['username'] && x['password'] == data['password'])
      {
        stud = x;
      }
    });

    return stud;

    // if(data["username"]=="kaustubh" && data["password"]=="password")
    // {
    //   return true;
    // }

    // return false;

  };

  doRegister(data:any)
  {
    this.students.push(data);

    return this.students;
  }
}
