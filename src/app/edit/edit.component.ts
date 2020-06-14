import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   editForm: FormGroup;
   submitted:boolean;
  itemId;
  itemDetails = {} ;
  constructor(
    private fb: FormBuilder,
    private collectionSevice:CollectionService,
    private http:HttpClient,
    private router:Router,
    private route:ActivatedRoute
    
  ) { }

  ngOnInit(){

    this.buildEditForm();

    //get item data by id for update
    this.route.params.subscribe(params =>{
      console.log(params);
      this.itemId = params.id;
      this.collectionSevice.getItem(params.id).subscribe(res =>{
        this.itemDetails = res ;

      });
    });
  }


  onSubmit(){
    
    this.collectionSevice.update(this.editForm.value,this.itemId).then(res => {
      console.log(res);
      this.router.navigate(['/cart']);
    });

    

  }





  
  buildEditForm(){
    this.editForm = this.fb.group({
      name : [null,Validators.required],
      job :  [null,Validators.required],
      
      
    });
  }
 
}
