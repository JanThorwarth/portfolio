import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacPpolicyComponent } from './privac-ppolicy.component';

describe('PrivacPpolicyComponent', () => {
  let component: PrivacPpolicyComponent;
  let fixture: ComponentFixture<PrivacPpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacPpolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacPpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
