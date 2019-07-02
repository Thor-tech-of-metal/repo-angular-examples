import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// These are the components that I will import and use them in the routes

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


// Here we match the imported components with the routes and paths.
// This will match in the template with any routerLink="/about"

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


