import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TvshowsDetailsComponent } from './components/tvshows/tvshows-details/tvshows-details.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
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
        component: MoviesComponent,
      }, 
      {
        path: "tvshow",
        component: TvshowsComponent,
      }, 
      {
        path:"tvshow/detail/:id",
        component: TvshowsDetailsComponent
      },
      {
        path:"movies/detail/:id",
        component: MovieDetailsComponent
      }
    ]
  },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
