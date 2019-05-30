import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalserviceService {
  

  constructor(private http: HttpClient) { }

  httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  suserxyz(data): Observable<any> {
    return this.http.post('http://localhost:3000/users/sregister', data, this.httpOptions);
  }
  puserxyz(data): Observable<any> {
    return this.http.post('http://localhost:3000/users/pregister', data, this.httpOptions);
  }

  sloginxyz(data): Observable<any> {
    return this.http.post('http://localhost:3000/users/slogin', data, this.httpOptions);
  }
  ploginxyz(data): Observable<any> {
    return this.http.post('http://localhost:3000/users/plogin', data, this.httpOptions);
  }


  jinfoxyz(data): Observable<any> {
    let token = window.localStorage.getItem('key');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
  
    return this.http.post('http://localhost:3000/users/offerjobs', data, httpOptions);
  }
  
  
  specxyz(data): Observable<any> {
    let token = window.localStorage.getItem('key');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.post('http://localhost:3000/users/specupload', data, httpOptions);
  }
  
  
  sendFile(data): Observable<any> {
    return this.http.post('http://localhost:3000/users/fileupload', data);
  
  }
  
  getproviderPost(): Observable<any> {
    // console.log(this.token);  
    return this.http.get('http://localhost:3000/users/offerPost', this.httpOptions);
  }
  
  getseekerPost(): Observable<any> {
    // console.log(this.token);  
    return this.http.get('http://localhost:3000/users/empPost', this.httpOptions);
  }
  
  hireEmploy(data): Observable<any> {
    // console.log(this.token);  
    let token = window.localStorage.getItem('key');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
  
    return this.http.post('http://localhost:3000/users/hire',{"resume_id":data}, httpOptions);
  }
  
  getinvitationPost(): Observable<any> {
    // console.log(this.token);  
    let token = window.localStorage.getItem('key');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get('http://localhost:3000/users/getinvi', httpOptions);
  }
 

  search(value: any): Observable<any> {
    return this.http.post('http://localhost:3000/users/searching', value, this.httpOptions);
  }
  

  
  forgotPass(data):Observable<any>{
    return this.http.post('http://localhost:3000/users/forgotpass',data,this.httpOptions);
  }

  resetPass(data,token):Observable<any>
  {
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':'Bearer ' + token
      })
    };
    return this.http.post('http://localhost:3000/users/resetpass',data,httpOptions);
  }



}

