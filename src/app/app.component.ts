import { Component } from '@angular/core';
import { NavigationService } from './navigation.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(public navigationService: NavigationService,private menuCtrl: MenuController) {}

  openMenu(){
    this.menuCtrl.open('main-content');
  }
}
