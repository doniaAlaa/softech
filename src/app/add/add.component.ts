
import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { FormGroup,FormBuilder, Validators, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { domainToASCII } from 'url';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

/*selectedFile:File = null ;*/
  addForm : FormGroup ;
 /* selectedFile: ImageSnippet;*/

  constructor(
    private fb: FormBuilder,
    private collectionSevice:CollectionService,
    private http:HttpClient,
    private router:Router
    
    ) { }


  ngOnInit() {
    this.buildAddForm();
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
      this.router.navigate(['/cart']);
      
    });

    

  }

  buildAddForm(){
    this.addForm = this.fb.group({
      name : [null,Validators.required],
      job : [null,Validators.required],
    /*  price :  [null,Validators.required],
      fileSource :  [null,Validators.required] */
      
    });
  }
 

 /* onFileSelected(event){
    this.selectedFile =<File> event.target.files[0];
  }
  
  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this.http.post('http://localhost:3000/goods',fd,{
      reportProgress:true,
      observe:'events'
    })
    .subscribe(res =>{
      console.log(res);
      
    });
   }

*/
/*
processFile(imageInput: any) {
  const file: File = imageInput.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', (event: any) => {

    this.selectedFile = new ImageSnippet(event.target.result, file);

    this.collectionSevice.uploadImage(this.selectedFile.file).subscribe(
      (res) => {
      
      },
      (err) => {
      
      })
  });

  reader.readAsDataURL(file);
}

*/
/*resetForm(f:NgForm){
  this.collectionSevice.registerUser(f.value)
  .subscribe((data:any) => {
    if (data.succeeded== true){
      this.resetForm(f);

    }
  });

}*/
  



}
