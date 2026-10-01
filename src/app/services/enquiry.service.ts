import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  readonly selectedSubject = signal<string>('General Enquiry: After-School Childcare');

  setSubject(subject: string): void {
    this.selectedSubject.set(subject);
  }

  generateMailtoUrl(params: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }): string {
    const to = 'ohemaastimewithkids@gmail.com';
    const emailSubject = encodeURIComponent(params.subject || 'Enquiry: Ohemaa’s Time With Kids');

    const lines = [
      `Parent / Guardian Name: ${params.name.trim()}`,
      `Reply Email: ${params.email.trim()}`,
      params.phone?.trim() ? `Phone: ${params.phone.trim()}` : null,
      '',
      'Message:',
      params.message.trim()
    ].filter((line): line is string => line !== null);

    const emailBody = encodeURIComponent(lines.join('\n'));
    return `mailto:${to}?subject=${emailSubject}&body=${emailBody}`;
  }
}
