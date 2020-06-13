import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment} from './../environments/environment';
import { User } from './interfaces/user.interface';
import { catchError } from 'rxjs/operators';    
 import { Observable, throwError, observable, BehaviorSubject } from 'rxjs';
import { error } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  public isLogged = false;
  public behaviorSubjectAdd = new BehaviorSubject<boolean>(false);

  httpOptions = {
   
    headers:new HttpHeaders ({
   /*  'Authorization' : 'Bearer eyJhbGciiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1ODcyNTY5NzIsImV4cCI6MTU4NzI2MDU3Mn0.Mt_mDKywrdt9cBbMYAomqbLYaBgpTXB4VI_te4N5MVo' */
     'Authorization' : 'QpwL5tke4Pnpja7X4',
     "Content-Type": "application/json",                                                                                                
     
     'Accept': 'application/json',
      'Content-type': 'application/json',
     
    })
  };

  constructor(private http:HttpClient) { }
  getBehaviorSubjectAdd(): Observable<any> {
    return this.behaviorSubjectAdd.asObservable();
  }
  //get all items correc
 //getAll(){
 //return this.http.get(`${environment.apiUrl}/goods` , this.httpOptions);
 //}

getAll(){
  return this.http.get(`${environment.apiUrl}/goods` , this.httpOptions);
  }
  

  

  delete(id){
    return this.http.delete(`${environment.apiUrl}/goods/${id}` , this.httpOptions)

 }


//  add(data){
//  return this.http.post('http://localhost:3000/goods',data, this.httpOptions)
// }

 add(data):Promise<any>{
  return this.http.post('http://localhost:3000/goods',data, this.httpOptions).toPromise()
 }



/*public uploadImage(image: File): Observable<Response> {
  const formData = new FormData();

  formData.append('image', image);

  return this.http.post('http://localhost:3000/goods', formData);
}

*/

//get item by id for update
getItem(id){
  return this.http.get(`${environment.apiUrl}/goods/${id}`,this.httpOptions );

}


// update(data,id){
//   return this.http.put(`${environment.apiUrl}/goods/${id}`,data,this.httpOptions );
// }

update(data,id):Promise<any>{
  return this.http.put(`${environment.apiUrl}/goods/${id}`,data,this.httpOptions ).toPromise();
}

/*signup(email,password){
  return this.http.post(`${environment.apiUrl}/users`,this.httpOptions );

}*/


/*registerUser(user : User){
  const body : User = {
    name : user.name,
    email : user.email,
    password : user.password

  }
  return this.http.post(`localhost:3000/users`,body,this.httpOptions );
}
*/
/*register(data){
  return this.http.post('http://localhost:3000/users',data, this.httpOptions);
}*/

/*register(data){
  return this.http.post(`https://cors-anywhere.herokuapp.com/https://api-wajad.smartappco.dev/api/register`,data, this.httpOptions)

}
*/

 register(data){
  return this.http.post(`https://cors-anywhere.herokuapp.com/https://api-wajad.smartappco.dev/api/register`,data, this.httpOptions)

}


  loginData(data){
 /* return this.http.post(`https://cors-anywhere.herokuapp.com/https://api-wajad.smartappco.dev/api/login`,data,this.httpOptions ).pipe();*/
 console.log(data)
 return this.http.post(`https://reqres.in/api/login`,data,this.httpOptions ).pipe();
  }

   updateData(data,id){
    return this.http.put(`${environment.apiUrl}/goods/${id}`,data,this.httpOptions );
   }


}