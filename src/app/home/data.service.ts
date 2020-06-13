import {Injectable} from '@angular/core' ;
import { HttpClient } from '@angular/common/http';
import { Good } from '../interfaces/good.interface';

 
@Injectable({
    providedIn: 'root'
})
export class Dataservice {
    apiUrl='http://localhost:3000/goods';

    constructor(private _http: HttpClient){
    }
    
        
  /* getUsers(){
       return this._http.get<Good[]>(this.apiUrl);
   }*/
   getUsers(){
    return this._http.get<Good[]>(this.apiUrl);
}


}