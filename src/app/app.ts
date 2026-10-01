import { Component } from '@angular/core';
import { SiteHeaderComponent } from './components/site-header/site-header';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { BenefitsStripComponent } from './components/benefits-strip/benefits-strip';
import { ActivitiesSectionComponent } from './components/activities-section/activities-section';
import { AboutSectionComponent } from './components/about-section/about-section';
import { ContactSectionComponent } from './components/contact-section/contact-section';
import { SiteFooterComponent } from './components/site-footer/site-footer';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    BenefitsStripComponent,
    ActivitiesSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    SiteFooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = "Ohemaa’s Time With Kids";
}
