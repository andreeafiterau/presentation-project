import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //define authenticated property to be able to get the authentication state from any component 
  public authenticated:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //define mock credentials(for checking if the input is the same with this object)
  public credetials = {
    username: 'demo',
    password: '1234'
  };
  constructor(private router: Router) { }

  login(credetials: any) : boolean{
    if(credetials.username === this.credetials.username && credetials.password === this.credetials.password){
      this.authenticated.next(true);
      this.router.navigateByUrl('/list');
      return true;
    }else{
      return false;
    }
  }

  logout() : void{
    this.authenticated.next(false);
    this.router.navigateByUrl('/login');
  }

  isAuthenticated(): boolean {
    return this.authenticated.value;
  }
}
