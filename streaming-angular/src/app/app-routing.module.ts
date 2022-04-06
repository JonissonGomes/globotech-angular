import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './pages/contacts/contacts.component';
import { FilmsComponent } from './pages/filmes/films.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  // Rotas dos components
  { path: "", component: HomeComponent },
  { path: "movies", component: MoviesComponent },
  { path: "series", component: FilmsComponent },
  { path: "contact",component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
