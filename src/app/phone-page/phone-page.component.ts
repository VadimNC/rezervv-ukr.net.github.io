import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import {Phone} from './phone';

@Component({
  selector: 'app-second-page',
  templateUrl: './phone-page.component.html',
  styleUrls: ['./phone-page.component.css'],
  providers: [DataService]
})
export class PhonePageComponent implements OnInit {

  items: Phone[] = [];
  constructor(private dataService: DataService){}

  addItem(name: string, price: number){

    this.dataService.addData(name, price);
  }
  ngOnInit(){
    this.items = this.dataService.getData();
  }

}
