import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user-page/users.service';

@Component({
  selector: 'app-setup-home-page',
  templateUrl: './setup-home-page.component.html',
  styleUrls: ['./setup-home-page.component.css']
})
export class SetupHomePageComponent implements OnInit {
  size;

  constructor(private usersService: UsersService) { }

  onChange(){
    this.usersService.setSize(+this.size);
  }

  ngOnInit() {
    this.size = this.usersService.size;
  }

}
