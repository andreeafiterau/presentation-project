import { Component, OnInit } from '@angular/core';
import { NavigationService } from './services/navigation.service';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  //get authentication state from auth service to decide if the toolbar is rendered or not
  public authenticated:Observable<boolean> = new Observable();
  
  constructor(public navigationService: NavigationService,
              private auth:AuthService) {
  }

  ngOnInit(): void {
    this.getAuthenticationState();
  }

  getAuthenticationState(){
    this.authenticated = this.auth.authenticated.asObservable();
  }
}
