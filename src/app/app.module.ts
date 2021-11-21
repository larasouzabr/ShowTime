import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FolderTemplateComponent } from './components/home/folder-template/folder-template.component';
import {HttpClientModule} from '@angular/common/http';
import { FolderTemplateTvComponent } from './components/home/folder-template-tv/folder-template-tv.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardAllTogetherComponent } from './components/movies/card-all-together/card-all-together.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { TvshowsDetailsComponent } from './components/tvshows/tvshows-details/tvshows-details.component';
import { AllTvShowsComponent } from './components/tvshows/all-tv-shows/all-tv-shows.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from 'ngx-pagination';
import { GenresComponent } from './components/genres/genres.component';
import { MovieByGenreComponent } from './components/genres/movie-by-genre/movie-by-genre.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search/search-result/search-result.component';
import { MatCardModule } from '@angular/material/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FolderTemplateComponent,
    FolderTemplateTvComponent,
    MoviesComponent,
    CardAllTogetherComponent,
    MovieDetailsComponent,
    TvshowsComponent,
    TvshowsDetailsComponent,
    AllTvShowsComponent,
    GenresComponent,
    MovieByGenreComponent,
    SearchComponent,
    SearchResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatExpansionModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
