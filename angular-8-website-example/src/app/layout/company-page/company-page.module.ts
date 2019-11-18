import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import {CompanyPageRoutingModule} from "./company-page.routing.module";
import {CompanyPageComponent} from "./company-page.component";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        CompanyPageRoutingModule,
        StatModule
    ],
    declarations: [
        CompanyPageComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class CompanyPageModule {}
