import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  items:any = [];

  constructor(private collectionSevice:CollectionService) { }

  ngOnInit() {
    this.getAll()
  }



   //get all items
   getAll(){
    this.collectionSevice.getAll().subscribe(res =>{
      console.log(res)
     
     this.items = res;
     
    })
  }
  
 deleteItem(id){
  this.collectionSevice.delete(id).subscribe(res => {
    console.log(res)
  },
  err => {
    console.log(err);
  }
  
  );
 }

}