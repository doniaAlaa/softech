import { Component, OnInit, ViewChild } from '@angular/core';
import { CollectionService } from '../collection.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login.interface';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: any; 
  addForm : FormGroup ;
  user ='1'
  constructor(
    private collectionSevice:CollectionService,
    private fb: FormBuilder,
    private http:HttpClient,
    private router:Router,
    private toastr:ToastrService
    
  ) { }

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/']);
    }
    this.buildAddForm();
    localStorage.setItem('SeesionUser',this.user) 
  }

 /* login(){
    
    this.collectionSevice.loginData(this.addForm.value).subscribe(
      /*res => {
      console.log(res);*/
    /*  (res:any ) =>{
        if (res.error.success){
          this.router.navigate(['/cart']);
        }else {
          this.toastr.error('login failed');
        }
      
    });

  }*/



  login(){
    
    this.collectionSevice.loginData(this.addForm.value).subscribe((res:any) => {
      // console.log(res)
      // let token =Object.getOwnPropertyDescriptor(res,'access_token')
      // console.log(token.value)
      // console.log(this.addForm.value)
      // let access_token = token.value;
      console.log(this.addForm.valid);
      if(this.addForm.valid){
        console.log(this.addForm.value);
      }
            
      localStorage.setItem('token', res.token);
      this.collectionSevice.isLogged = true;
      alert('login is done');
      this.router.navigate(['/cart']);
      
    
  }, error => {
     // second parameter is to listen for error
      console.log(error);
      this.error = error.error.message;
  });
 
  }





         








  buildAddForm(){
    this.addForm = this.fb.group({
      email : [null,Validators.required],
      password :  [null,Validators.required],
     /* device_type :  [null,Validators.required]*/
      
    });  
    










  }
 





 


}
