import { Component, input, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivityItem } from '../../core/site-data';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-activity-card',
  imports: [NgOptimizedImage],
  templateUrl: './activity-card.html',
  styleUrl: './activity-card.scss'
})
export class ActivityCardComponent {
  readonly item = input.required<ActivityItem>();
  private readonly enquiryService = inject(EnquiryService);

  onEnquire(event: Event): void {
    event.preventDefault();
    this.enquiryService.setSubject(this.item().enquirySubject);
    if (typeof document !== 'undefined') {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Focus the name input if present
        const nameInput = document.getElementById('enquiry-name') as HTMLInputElement | null;
        if (nameInput) {
          nameInput.focus({ preventScroll: true });
        }
      }
    }
  }
}
