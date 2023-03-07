import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

 
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
 
  constructor(private userservice: UserserviceService,private router: Router  ) {}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any {
      if(this.userservice.getToken() == null){
        return true
      }else{
        return this.router.navigate(['/chat']);
      }

     
    
  }

 
}