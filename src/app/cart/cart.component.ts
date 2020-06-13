import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Router } from '@angular/router';

import { FormGroup,FormBuilder, Validators, NgForm} from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  showData = false;
items:any = [];
addForm : FormGroup ;

  constructor(private collectionSevice:CollectionService,private router:Router,private fb: FormBuilder) { }

  ngOnInit(){
     this.buildAddForm();
    this.getAll();

  }
  buildAddForm(){
    this.addForm = this.fb.group({
      name : ['',Validators.required],
      job : ['',Validators.required],
    
      
    });
  }
  //get all items
  getAll(){
    this.collectionSevice.getAll().subscribe(res =>{
      console.log(res)
     
     this.items = res;
     this.showData = true;
    })
  }




  deleteItem(id){
    this.collectionSevice.delete(id).subscribe(res => {
      console.log(res)
      alert('u sure');
      this.getAll();
      
      
    },
    err => {
      console.log(err);
    }
    
    );
   }








   onSubmit(){
 
    this.collectionSevice.add(this.addForm.value).then(res => {
     /* console.log(res.id);
      let data= {name:'Donia',price:10}
      this.collectionSevice.update(data, res.id).then(()=>{
        this.router.navigate(['/cart']);
      }
        
      )  */

      console.log(res);
      this.getAll();
     $('#addForm').modal('hide');
      
    });

    

  }







}
