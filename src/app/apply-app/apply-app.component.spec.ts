import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAppComponent } from './apply-app.component';

describe('ApplyAppComponent', () => {
  let component: ApplyAppComponent;
  let fixture: ComponentFixture<ApplyAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
