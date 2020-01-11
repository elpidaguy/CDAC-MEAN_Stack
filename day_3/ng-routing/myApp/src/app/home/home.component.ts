import { Component, OnInit } from '@angular/core';
import { HomService } from './hom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userList;

  constructor(private homeService: HomService) { 
      this.userList = [];
  }
  ngOnInit() {

    this.homeService.getAllData().toPromise().then((userList2)=> {
        this.userList = userList2;
    })

  }

}
