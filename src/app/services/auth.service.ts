import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authenticated:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public credetials = {
    username: 'demo',
    password: '1234'
  };
  constructor(private router: Router) { }

  login(credetials: any){
    if(credetials.username === this.credetials.username && credetials.password === this.credetials.password){
      this.authenticated.next(true);
      this.router.navigateByUrl('/list');
      return true;
    }else{
      return false;
    }
  }

  logout(){
    this.authenticated.next(false);
    this.router.navigateByUrl('/login');
  }

  isAuthenticated(): boolean {
    return this.authenticated.value;
  }
}
