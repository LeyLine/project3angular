import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes } from "@angular/router";
import { SessionService } from "./session.service";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AshtangaComponent } from './ashtanga/ashtanga.component';
import { RouterModule } from "@angular/router";
// import {routestwo} from './app.routing';
import { StylesService } from "./styles.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StyleDetailsComponent } from './style-details/style-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'dash',
    component: DashboardComponent
  },
  {
    path: 'ashtanga',
    component: AshtangaComponent
  },
  // { path: 'about', component: MyAboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AshtangaComponent,
    DashboardComponent,
    StyleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ SessionService,
               StylesService
             ],

  bootstrap: [AppComponent]
})
export class AppModule { }
