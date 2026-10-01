import { Component } from '@angular/core';
import { SITE_DATA } from '../../core/site-data';
import { ActivityCardComponent } from '../activity-card/activity-card';

@Component({
  selector: 'app-activities-section',
  imports: [ActivityCardComponent],
  templateUrl: './activities-section.html',
  styleUrl: './activities-section.scss'
})
export class ActivitiesSectionComponent {
  readonly siteData = SITE_DATA;
}
