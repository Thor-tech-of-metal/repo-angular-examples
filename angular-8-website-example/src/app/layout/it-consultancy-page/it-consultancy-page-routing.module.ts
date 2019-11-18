import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItConsultancyPageComponent} from "./it-consultancy-page.component";


const routes: Routes = [
    {
        path: '',
        component: ItConsultancyPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItConsultancyPageRoutingModule {}
