import { take, map, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: "root"
})
export class AuthGuard {
  
  constructor(private router: Router, 
              private auth: AuthService) {}
  
  canActivate(): boolean {
    // Check authentication status synchronously
    if (this.auth.isAuthenticated()) {
      return true; // Allow access if authenticated
    } else {
      this.router.navigate(['/login']); // Redirect to login page if not authenticated
      return false;
    }
  }
}
