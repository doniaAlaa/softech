import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { User } from '../interfaces/user.interface';
import { NgForm } from '@angular/forms';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  addForm : FormGroup ;

  constructor(
    private collectionSevice:CollectionService,
    private fb: FormBuilder,
    private http:HttpClient,
    private router:Router
    
    ) { }

  ngOnInit() {
  
    this.buildAddForm();
  }

 /* signup(f){
   
    let data : User = f.value
    this.collectionSevice.signup(data.email,data.password)
    .subscribe(data => console.log(data));
   



  }  */

 /* signup(f:NgForm){
    this.collectionSevice.registerUser(f.value).subscribe(res =>{
      console.log(res)
    });
  }
*/


signUp(){
    
    this.collectionSevice.register(this.addForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/cart']);
    });

    

  }

  buildAddForm(){
    this.addForm = this.fb.group({
      name : [null,Validators.required],
      email :  [null,Validators.required],
      password :  [null,Validators.required],
      mobile_number :  [null,Validators.required],
      device_type : [null,Validators.required],
      mobile_country_id : [null,Validators.required]


      
    });
  }
 





}
