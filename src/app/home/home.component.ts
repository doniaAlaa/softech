import { Component, OnInit } from '@angular/core';
import { Good } from '../interfaces/good.interface';
import { Dataservice } from './data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
showData = false;
  goods$:Good[]
  constructor(private dataservice:Dataservice) { }

  ngOnInit() {
    return this.dataservice.getUsers()
    .subscribe(
      (data) =>{this.goods$ = data;
        this.showData = true;
      }
      );
  }


  





}
