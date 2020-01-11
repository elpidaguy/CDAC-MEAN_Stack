import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomService {

  constructor(private httpClient: HttpClient ) { }

  public getAllData()
  {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
}
