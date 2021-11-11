import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RoutingGuard } from './guards/routing.guard';

const routes: Routes = [
  {
    path:"",
    component:NavBarComponent,
    canActivate:[RoutingGuard],
    children:[
      {
        path : "home",
        component: HomeComponent,
      },
      {
        path: "movies",
        component: MoviesComponent
      }
    ]
  }];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
