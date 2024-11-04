import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { TextAnim1Component } from './pages/widgets/text-anim1/text-anim1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './pages/background/background.component';
import { BookComponent } from './pages/book/book.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BookTitleComponent } from './pages/widgets/book-title/book-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TextAnim1Component,
    BackgroundComponent,
    BookComponent,
    ProjectsComponent,
    BookTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
