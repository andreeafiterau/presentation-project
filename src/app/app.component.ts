import { Component, OnInit } from '@angular/core';
import { NavigationService } from './services/navigation.service';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { Observable, Subject } from 'rxjs';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  public authenticated:Observable<boolean> = new Observable();
  
  constructor(public navigationService: NavigationService,
              private menuCtrl: MenuController,
              private auth:AuthService) {
                this.setAuthenticatedVariable();
              }

  ngOnInit(): void {
  }

  setAuthenticatedVariable(){
    this.authenticated = this.auth.authenticated.asObservable();
  }
}
