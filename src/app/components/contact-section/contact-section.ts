import { Component, inject, signal, effect } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { SITE_DATA } from '../../core/site-data';
import { EnquiryService } from '../../services/enquiry.service';

function emailValidator(control: AbstractControl): ValidationErrors | null {
  const val = control.value ? String(control.value).trim() : '';
  if (!val) return null;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(val) ? null : { invalidEmail: true };
}

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss'
})
export class ContactSectionComponent {
  private readonly fb = inject(FormBuilder);
  readonly enquiryService = inject(EnquiryService);
  readonly siteData = SITE_DATA;

  readonly isCopied = signal(false);
  readonly copyFeedbackMessage = signal('');

  readonly enquiryForm = this.fb.group({
    parentName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, emailValidator]],
    phone: [''],
    subject: [this.enquiryService.selectedSubject(), [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor() {
    // Keep subject in sync if updated from activity cards
    effect(() => {
      const activeSubject = this.enquiryService.selectedSubject();
      this.enquiryForm.patchValue({ subject: activeSubject }, { emitEvent: false });
    });
  }

  get f() {
    return this.enquiryForm.controls;
  }

  onFormSubmit(): void {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

    const formVal = this.enquiryForm.value;
    const mailtoUrl = this.enquiryService.generateMailtoUrl({
      name: (formVal.parentName || '').trim(),
      email: (formVal.email || '').trim(),
      phone: (formVal.phone || '').trim(),
      subject: (formVal.subject || '').trim(),
      message: (formVal.message || '').trim()
    });

    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }
  }

  async copyEmailToClipboard(): Promise<void> {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(this.siteData.email);
        this.isCopied.set(true);
        this.copyFeedbackMessage.set('Email address copied to clipboard!');
        setTimeout(() => {
          this.isCopied.set(false);
          this.copyFeedbackMessage.set('');
        }, 3500);
      }
    } catch {
      this.copyFeedbackMessage.set('Please manually copy: ' + this.siteData.email);
    }
  }
}
