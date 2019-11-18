import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ItConsultancyPageComponent} from "./it-consultancy-page.component";
import {ItConsultancyPageModule} from "./it-consultancy-page.module";

describe('BsElementComponent', () => {
  let component: ItConsultancyPageComponent;
  let fixture: ComponentFixture<ItConsultancyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ItConsultancyPageModule, RouterTestingModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItConsultancyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
