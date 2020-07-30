import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {


   }

   StoreUser(firstname:string,lastname:string,emailid:string,mobileno:number,gender:string,address:string,password:string){
     this.http.post('https://test-be1d1.firebaseio.com/users.json',{
firstname:firstname,
lastname:lastname,
emailid:emailid,
mobileno:mobileno,
gender:gender,
address:address,
password:password,
     }).subscribe()
   }


   FetchUsers(){
    return this.http.get('https://test-be1d1.firebaseio.com/users.json')
   }

   loggedin(){
    return  !!localStorage.getItem('email')
   }
}
