import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  checkLogin(user:string, pass:string){
    return this.http.get('http://shakyacollection.com/login_check.php?email='+user+'&pass='+pass);
  }
}
