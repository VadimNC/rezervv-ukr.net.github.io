import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  @Input() user;
  isMarked = false;

  constructor() {
  }

  onClick() {
    // console.log('Clicked!')
    this.isMarked = true;
  }

  ngOnInit() {
  }

}
