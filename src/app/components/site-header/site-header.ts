import { Component, signal, inject, ElementRef } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SITE_DATA } from '../../core/site-data';

@Component({
  selector: 'app-site-header',
  imports: [NgOptimizedImage],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  host: {
    '[class.is-scrolled]': 'isScrolled()',
    '(window:scroll)': 'onWindowScroll()',
    '(window:keydown.escape)': 'onEscape()'
  }
})
export class SiteHeaderComponent {
  private readonly elementRef = inject(ElementRef);
  readonly siteData = SITE_DATA;
  readonly isMobileMenuOpen = signal(false);
  readonly isScrolled = signal(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((val) => !val);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 20);
    }
  }

  onEscape(): void {
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  scrollToSection(event: Event, fragment: string): void {
    event.preventDefault();
    this.closeMobileMenu();
    if (typeof document !== 'undefined') {
      const target = document.getElementById(fragment);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.focus({ preventScroll: true });
      }
    }
  }
}
