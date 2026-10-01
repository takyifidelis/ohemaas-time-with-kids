import { Component } from '@angular/core';
import { SITE_DATA } from '../../core/site-data';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss'
})
export class AboutSectionComponent {
  readonly siteData = SITE_DATA;
}
