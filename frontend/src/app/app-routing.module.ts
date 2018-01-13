
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, NavbarComponent, ContactComponent, AboutComponent, SignInComponent,ProfileComponent, NorthAmericaComponent, SouthAmericaComponent, AfricaComponent, AustraliaComponent, AsiaComponent, AntarcticaComponent, EuropeComponent} from './components';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  }, 
   {
    path: 'contact', component: ContactComponent
  }, 
   {
    path: 'about', component: AboutComponent
  }, 
   {
    path: 'signIn', component: SignInComponent
  },
  
  {
	  path: 'profile', component: ProfileComponent
  },
   {
    path: 'northAmerica', component: NorthAmericaComponent
  },
  {
    path: 'southAmerica', component: SouthAmericaComponent
  },
  {
    path: 'africa', component: AfricaComponent
  },
  {
    path: 'australia', component: AustraliaComponent
  },
  {
    path: 'asia', component: AsiaComponent
  },
  {
    path: 'europe', component: EuropeComponent
  },
  {
    path: 'antarctica', component: AntarcticaComponent
  }

  // otherwise redirect to home
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
