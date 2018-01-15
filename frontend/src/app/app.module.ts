// CORE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// UI
import { SuiModule } from 'ng2-semantic-ui';

// Services
import { ApiService } from './service';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent, NavbarComponent, ContactComponent } from './components';

// used to create fake backend
import { fakeBackendProvider } from './service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { NorthAmericaComponent } from './components/pages/north-america/north-america.component';
import { SouthAmericaComponent } from './components/pages/south-america/south-america.component';
import { AfricaComponent } from './components/pages/africa/africa.component';
import { AustraliaComponent } from './components/pages/australia/australia.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AsiaComponent } from './components/pages/asia/asia.component';
import { AntarcticaComponent } from './components/pages/antarctica/antarctica.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { EuropeComponent } from './components/pages/europe/europe.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { FileUploaderModule } from "ng4-file-upload/file-uploader.module";

import {RouterModule,Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent, 
	ContactComponent, NorthAmericaComponent, SouthAmericaComponent, AfricaComponent, AustraliaComponent, AboutComponent, AsiaComponent, AntarcticaComponent, SignInComponent, EuropeComponent, ProfileComponent ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SuiModule,
    FileUploaderModule,
   
  ],
  providers: [
    AppRoutingModule,
    ApiService,
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
