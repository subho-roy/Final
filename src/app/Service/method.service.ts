import { Injectable } from '@angular/core';
import { Reg,Login } from '../class/c1';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MethodService {
  Registration_url='https://wtsacademy.dedicateddevelopers.us/api/user/signup';
  LogIn_url='https://wtsacademy.dedicateddevelopers.us/api/user/signin';

  constructor(private http:HttpClient) { }

  postData(formData:any):Observable<Reg[]>
  {
    return this.http.post<Reg[]>(this.Registration_url,formData);
  }
  postData1(formdata:any):Observable<Login[]>
  {
    return this.http.post<Login[]>(this.LogIn_url,formdata);
  }
}
