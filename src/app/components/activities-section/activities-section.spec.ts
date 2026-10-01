import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivitiesSectionComponent } from './activities-section';

describe('ActivitiesSectionComponent', () => {
  let component: ActivitiesSectionComponent;
  let fixture: ComponentFixture<ActivitiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesSectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all 3 activity cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('app-activity-card');
    expect(cards.length).toBe(3);
    expect(compiled.querySelector('.section-title')?.textContent).toContain('Little moments. Big discoveries.');
  });
});
