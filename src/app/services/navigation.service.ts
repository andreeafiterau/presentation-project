// navigation.service.ts
import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  pageTitle: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        this.pageTitle = data['title'] || '';
      });
  }
}
