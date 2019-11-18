import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompanyPageComponent } from './company-page.component';
import { CompanyPageRoutingModule } from './company-page.routing.module';

describe('CompanyPageComponent', () => {
  let component: CompanyPageComponent;
  let fixture: ComponentFixture<CompanyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CompanyPageRoutingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
