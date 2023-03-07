import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  url:string = "http://localhost/chatphp/";

  redirectUrl: string = ""; 

  loggedin:boolean = false;
  userinfo:any = {
    fname: "",
    lname: "",
    email: "",
    avatar: "",
    status: ""
  };

  private _refresh$ = new Subject<void>();

 
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }

 userlogin(username:string, pass:string) {
    return this.httpClient.post<any>(`${this.url}login.php`, { username, pass })
        .pipe(map(Usermodule => {
            this.setToken(Usermodule[0].email, Usermodule[0].avatar, Usermodule[0].fname, Usermodule[0].lname, Usermodule[0].status);

            this.setTokenSession(Usermodule[0].email)
            this.getLoggedInName.emit(true);
            return Usermodule;
        }));
}


 userregistration(fname:string,lname:string,email:string,pass:string,avatar:string,status:string) {
  return this.httpClient.post<any>(`${this.url}registration.php`, { fname, lname,email, pass,avatar,status })
      .pipe(map(Usermodule => {
          return Usermodule;
      }));
}


//token
setToken(token: string,avatar:string, fname:string, lname:string, status:string) {
  localStorage.setItem('token', token);
  localStorage.setItem('avatar', avatar);
  localStorage.setItem('fname', fname);
  localStorage.setItem('lname', lname);
  localStorage.setItem('status', status);
}
setTokenSession(token: string) {
  sessionStorage.setItem('token', token);
}
 
getToken() {
  // sessionStorage.getItem('token');
  const token = localStorage.getItem('token');
  this.userinfo.email = token;
  this.userinfo.fname = localStorage.getItem('fname');
  this.userinfo.lname = localStorage.getItem('lname');
  this.userinfo.avatar = localStorage.getItem('avatar');
  this.userinfo.status = localStorage.getItem('status');
  return token;
}
 
deleteToken() {
  localStorage.removeItem('token');
  localStorage.removeItem('token');
  localStorage.removeItem('avatar');
  localStorage.removeItem('fname');
  localStorage.removeItem('lname');
  localStorage.removeItem('status');
}
 
isLoggedIn() {
   const usertoken = this.getToken();
  if (usertoken != null) {
    return true;
  }
  return false;
}

  mostrarusers(){
    return this.httpClient.get(`${this.url}mostrarusers.php`);
    
  }
  
  mostrartext(){
    return this.httpClient.get(`${this.url}mostrarmessages.php`)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  uploadFile(archivo:any) {
    return this.httpClient.post(`${this.url}subirarchivo.php`, JSON.stringify(archivo));
  }

 
setText(messages:any){
  return this.httpClient.post(`${this.url}insertar.php`, JSON.stringify(messages))
  .pipe(
    tap(() => {
      this._refresh$.next();
    })
  )
}


get refresh$(){
  return this._refresh$;
}




}
