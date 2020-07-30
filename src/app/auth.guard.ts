import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor(private auth: UserService,private router:Router){}
canActivate(router: ActivatedRouteSnapshot):boolean{

if(this.auth.loggedin()){
  return true
}


else{
  this.router.navigate(['/home'])
}




}
}
