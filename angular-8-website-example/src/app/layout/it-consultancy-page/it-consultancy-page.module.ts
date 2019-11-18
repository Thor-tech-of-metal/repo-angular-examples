import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ItConsultancyPageComponent} from "./it-consultancy-page.component";
import {ItConsultancyPageRoutingModule} from "./it-consultancy-page-routing.module";

@NgModule({
    imports: [CommonModule, ItConsultancyPageRoutingModule, PageHeaderModule, NgbModule],
    declarations: [ItConsultancyPageComponent]
})
export class ItConsultancyPageModule {}
