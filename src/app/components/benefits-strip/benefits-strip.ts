import { Component } from '@angular/core';
import { SITE_DATA } from '../../core/site-data';

@Component({
  selector: 'app-benefits-strip',
  templateUrl: './benefits-strip.html',
  styleUrl: './benefits-strip.scss'
})
export class BenefitsStripComponent {
  readonly siteData = SITE_DATA;
}
