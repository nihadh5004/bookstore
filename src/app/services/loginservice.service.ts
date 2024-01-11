import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPost, LoginType } from '../assets/LoginType';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  
  login(data:LoginPost):Observable<LoginType>{
    return this.http.post<LoginType>('https://www.edu-cons.online/token/',data,httpOptions)
  }

}
