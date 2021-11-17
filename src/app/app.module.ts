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
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SwiperModule} from 'swiper/angular';
import { MovieDialogComponent } from './components/movie-details/movie-dialog/movie-dialog.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { TvshowsDetailsComponent } from './components/tvshows/tvshows-details/tvshows-details.component';
import { AllTvShowsComponent } from './components/tvshows/all-tv-shows/all-tv-shows.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from 'ngx-pagination';
 
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
    MovieDialogComponent,
    TvshowsComponent,
    TvshowsDetailsComponent,
    AllTvShowsComponent
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
    MatPaginatorModule,
    MatExpansionModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
