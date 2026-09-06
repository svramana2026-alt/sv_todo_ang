import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHearder } from './app-hearder';

describe('AppHearder', () => {
  let component: AppHearder;
  let fixture: ComponentFixture<AppHearder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHearder],
    }).compileComponents();

    fixture = TestBed.createComponent(AppHearder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
