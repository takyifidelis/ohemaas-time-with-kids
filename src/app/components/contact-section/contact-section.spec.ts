import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSectionComponent } from './contact-section';

describe('ContactSectionComponent', () => {
  let component: ContactSectionComponent;
  let fixture: ComponentFixture<ContactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize with invalid empty form', () => {
    expect(component.enquiryForm.valid).toBe(false);
  });

  it('should validate email format properly', () => {
    const emailControl = component.enquiryForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.valid).toBe(false);

    emailControl?.setValue('parent@example.com');
    expect(emailControl?.valid).toBe(true);
  });

  it('should validate complete form when fields are filled', () => {
    component.enquiryForm.patchValue({
      parentName: 'Ama Mensah',
      email: 'ama@example.com',
      phone: '0550794321',
      subject: 'Enquiry: Learn & Discover',
      message: 'I would like to know more about the after-school schedule.'
    });

    expect(component.enquiryForm.valid).toBe(true);
  });
});
