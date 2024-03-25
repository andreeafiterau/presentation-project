import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-wildcard',
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.scss'],
})
export class WildcardComponent  implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

}
