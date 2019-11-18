import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./company-page/company-page.module').then(m => m.CompanyPageModule) },
            { path: 'it-consultancy', loadChildren: () => import('./it-consultancy-page/it-consultancy-page.module').then(m => m.ItConsultancyPageModule) },
            { path: 'clients', loadChildren: () => import('./clients-page/client-page.module').then(m => m.ClientPageModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
