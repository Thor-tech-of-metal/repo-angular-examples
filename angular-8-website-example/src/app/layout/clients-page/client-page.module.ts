import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ClientPageComponentsRoutingModule} from "./client-page.components.routing.module";
import {ClientComponent} from "./clients-page.component";

@NgModule({
    imports: [CommonModule, ClientPageComponentsRoutingModule, PageHeaderModule, NgbModule],
    declarations: [ClientComponent]
})
export class ClientPageModule {}
