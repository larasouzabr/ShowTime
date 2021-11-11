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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FolderTemplateComponent,
    FolderTemplateTvComponent,
    MoviesComponent,
    CardAllTogetherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
