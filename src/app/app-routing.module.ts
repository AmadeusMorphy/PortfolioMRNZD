import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TextAnim1Component } from './pages/widgets/text-anim1/text-anim1.component';
import { BackgroundComponent } from './pages/background/background.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BookComponent } from './pages/book/book.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'background', component: BackgroundComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'book', component: BookComponent},
  {path: 'about', component: AboutComponent},
  {path: 'text', component: TextAnim1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
