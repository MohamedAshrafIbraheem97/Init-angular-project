import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioCardComponent } from './portfolio/portfolio-card/portfolio-card.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    PortfolioComponent,
    PortfolioCardComponent,
    SectionHeaderComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
