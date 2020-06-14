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
  

getAll(){
  return this.http.get(`${environment.apiUrl}/goods` , this.httpOptions);
  }
  

  

  delete(id){
    return this.http.delete(`${environment.apiUrl}/goods/${id}` , this.httpOptions)

 }


 add(data):Promise<any>{
  return this.http.post('http://localhost:3000/goods',data, this.httpOptions).toPromise()
 }





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







register(data){
  return this.http.post(`https://reqres.in/api/register`,data, this.httpOptions)

}




  loginData(data){
  console.log(data)
 return this.http.post(`https://reqres.in/api/login`,data,this.httpOptions ).pipe();
  }

   updateData(data,id){
    return this.http.put(`${environment.apiUrl}/goods/${id}`,data,this.httpOptions );
   }


}