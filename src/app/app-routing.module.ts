import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { WildcardComponent } from './components/wildcard/wildcard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    data:{ title: 'Login'},
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'list',
    data:{ title: 'Character List'},
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'detail',
    data:{ title: 'Character Details'},
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'about',
    data:{ title: 'About Me'},
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: '**',
    component: WildcardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
