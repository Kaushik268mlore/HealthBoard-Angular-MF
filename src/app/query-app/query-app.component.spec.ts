import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAppComponent } from './query-app.component';

describe('QueryAppComponent', () => {
  let component: QueryAppComponent;
  let fixture: ComponentFixture<QueryAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
