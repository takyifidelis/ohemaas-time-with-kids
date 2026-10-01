import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SITE_DATA } from '../../core/site-data';

@Component({
  selector: 'app-site-footer',
  imports: [NgOptimizedImage],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss'
})
export class SiteFooterComponent {
  readonly siteData = SITE_DATA;

  scrollToSection(event: Event, fragment: string): void {
    event.preventDefault();
    if (typeof document !== 'undefined') {
      const target = document.getElementById(fragment);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.focus({ preventScroll: true });
      }
    }
  }
}
