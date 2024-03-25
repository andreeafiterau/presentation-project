import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authenticated:Subject<boolean> = new Subject();
  public credetials = {
    username: 'demo',
    password: '1234'
  };
  constructor(private router: Router) { }

  login(credetials: any){
    if(credetials.username === this.credetials.username && credetials.password === this.credetials.password){
      this.authenticated.next(true);
      this.router.navigateByUrl('/list');
    }
  }

  logout(){
    this.authenticated.next(false);
    this.router.navigateByUrl('/login');
  }
}
