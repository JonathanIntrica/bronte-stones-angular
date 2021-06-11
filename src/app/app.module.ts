import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WhatsOnComponent } from './whats-on/whats-on.component';
import { TheWalksComponent } from './the-walks/the-walks.component';
import { ShopComponent } from './shop/shop.component';
import { PlanYourVisitComponent } from './plan-your-visit/plan-your-visit.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'whats-on', component: WhatsOnComponent },
      { path: 'shop', component: WhatsOnComponent },
      { path: 'the-walks', component: TheWalksComponent },
      { path: 'plan-your-visit', component: WhatsOnComponent },
      { path: 'about', component: WhatsOnComponent },
      { path: 'contact', component: WhatsOnComponent },
      { path: '404', component: PageNotFoundComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: '**', redirectTo: '404', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
