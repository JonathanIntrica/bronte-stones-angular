import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WhatsOnComponent } from './whats-on/whats-on.component';
import { TheWalksComponent } from './the-walks/the-walks.component';
import { ShopComponent } from './shop/shop.component';
import { PlanYourVisitComponent } from './plan/plan-your-visit.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {GoogleMapsModule} from "@angular/google-maps";
import { BronteWalkComponent } from './the-walks/bronte-walk/bronte-walk.component';
import { AnneWalkComponent } from './the-walks/anne-walk/anne-walk.component';
import { CharlotteWalkComponent } from './the-walks/charlotte-walk/charlotte-walk.component';
import { EmilyWalkComponent } from './the-walks/emily-walk/emily-walk.component';
import {MapService} from "./shared/map.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WhatsOnComponent,
    TheWalksComponent,
    ShopComponent,
    PlanYourVisitComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    BronteWalkComponent,
    AnneWalkComponent,
    CharlotteWalkComponent,
    EmilyWalkComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    GoogleMapsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'whats-on', component: WhatsOnComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'the-walks', component: TheWalksComponent },
      { path: 'plan', component: PlanYourVisitComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '404', component: PageNotFoundComponent },
      { path: 'the-walks/anne-walk', component: AnneWalkComponent },
      { path: 'the-walks/bronte-walk', component: BronteWalkComponent },
      { path: 'the-walks/charlotte-walk', component: CharlotteWalkComponent },
      { path: 'the-walks/anne-walk', component: AnneWalkComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: '**', redirectTo: '404', pathMatch: 'full'}
    ]),
  ],
  providers: [
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
